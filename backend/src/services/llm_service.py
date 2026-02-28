from openai import OpenAI
import os

# On utilise l'URL du container ollama défini dans docker-compose
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://ollama:11434")

# Ollama expose une API compatible OpenAI sur /v1
client = OpenAI(
    base_url=f"{OLLAMA_HOST}/v1",
    api_key="ollama", # Clé bidon requise par la lib mais ignorée par Ollama
)

def generate_explanation(score_result, answers):
    """
    Service pour interagir avec Ollama (via API compatible OpenAI)
    Identifie la catégorie la plus risquée pour guider le LLM.
    """
    breakdown = score_result['breakdown']
    # Identifier la catégorie avec le score de risque le plus élevé
    max_category = max(breakdown, key=breakdown.get)
    max_score = breakdown[max_category]

    category_names = {
        "password": "Mots de passe",
        "browsing": "Navigation Web",
        "email": "Emails / Phishing",
        "social": "Réseaux Sociaux"
    }

    prompt_system = f"""
    Tu es "Coach Cyber", un expert en cybersécurité pédagogue et direct.
    Ta mission est d'analyser les résultats d'un utilisateur et de lui faire prendre conscience de ses failles.

    CONSIGNES STRICTES :
    1. Ton : Professionnel, légèrement alarmiste mais constructif (pédagogique).
    2. Focus : Tu DOIS prioriser ta critique sur la catégorie "{category_names[max_category]}" car c'est là que l'utilisateur a son pire score de risque ({max_score}/100).
    3. Contenu : Explique POURQUOI ses habitudes sont dangereuses dans cette catégorie spécifique.
    4. Action : Donne 2 ou 3 conseils concrets et immédiats pour réduire ce risque.
    5. Interdiction : Ne pas inventer de nouveaux scores. Ne pas être trop verbeux.
    6. Langue : Réponds uniquement en Français.

    RÉSULTATS DE L'UTILISATEUR :
    - Score de Risque Global : {score_result['totalRiskScore']}/100
    - Détails des risques par thématique : {breakdown}
    """

    prompt_user = f"Voici mes habitudes numériques : {answers}. Analyse mon profil et dis-moi ce qui ne va pas, surtout pour {category_names[max_category]}."

    try:
        response = client.chat.completions.create(
            model="llama3",
            messages=[
                {"role": "system", "content": prompt_system},
                {"role": "user", "content": prompt_user}
            ],
            temperature=0.7,
            timeout=300.0
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Erreur Ollama: {e}")
        return f"Désolé, je rencontre une difficulté technique. Retenez que votre risque principal concerne les {category_names[max_category]} (Score: {max_score}/100). Sécurisez vos accès en priorité !"