# Privacy by Design - Cyber Mirror

## Conformité RGPD

### Principes appliqués

Le projet **Cyber Mirror** respecte strictement les principes du Règlement Général sur la Protection des Données (RGPD) en appliquant les mesures suivantes :

---

## 1. Absence totale de collecte de données réelles

**Aucune donnée personnelle identifiable n'est collectée.**

- Les réponses au questionnaire sont **entièrement simulées et fictives**
- Aucun identifiant utilisateur (nom, email, adresse IP) n'est demandé ou stocké
- L'application ne nécessite aucune authentification
- Aucune base de données n'est utilisée pour persister les informations

---

## 2. Minimisation des données

**Seules les données strictement nécessaires à la démonstration pédagogique sont traitées.**

- Le questionnaire se limite à 10 questions génériques sur des habitudes numériques
- Les réponses sont traitées localement dans le navigateur
- Aucune métadonnée (géolocalisation, historique de navigation) n'est collectée

---

## 3. Limitation des finalités

**Les données simulées ont une unique finalité : la sensibilisation pédagogique.**

- Calcul d'un score de risque cyber à but éducatif
- Génération d'une synthèse pédagogique par l'IA
- Aucune exploitation commerciale ou publicitaire
- Aucun partage avec des tiers

---

## 4. Transparence du traitement

**Le moteur de scoring est entièrement transparent.**

- Le code source du calcul des scores est accessible et documenté
- Chaque réponse se voit attribuer un nombre de points visible
- Les pondérations par thématique sont explicites (40% mots de passe, 30% navigation, etc.)
- L'utilisateur comprend exactement comment son score est calculé

---

## 5. Anonymisation avant envoi au LLM

**Les données envoyées à l'API OpenAI sont anonymisées.**

- Seuls les scores numériques calculés sont transmis (pas de réponses brutes)
- Aucun identifiant personnel n'accompagne la requête
- Les échanges avec l'API sont ponctuels et non persistés côté OpenAI
- Exemple de données envoyées :
  ```json
  {
    "globalScore": 45,
    "thematicScores": {
      "passwords": 60,
      "navigation": 40,
      "emails": 35,
      "social": 20
    }
  }
  ```

---

## 6. Pas de stockage persistant

**Aucune donnée n'est conservée après la session.**

- Les réponses et résultats existent uniquement en mémoire pendant l'utilisation
- Fermer l'onglet = suppression immédiate des données
- Aucun cookie de tracking n'est utilisé
- Aucun fichier journal (log) contenant des données personnelles

---

## 7. Droit à l'information

**L'utilisateur est informé dès l'accueil.**

Un disclaimer visible indique :
> "⚠️ Cette application utilise des données simulées à des fins pédagogiques. Aucune information personnelle réelle n'est collectée ou stockée."

Ce message est répété dans les résultats pour garantir la transparence.

---

## 8. Privacy by Design technique

**Mesures techniques mises en œuvre :**

- Architecture sans base de données
- Variables d'environnement pour protéger la clé API OpenAI
- Communication HTTPS uniquement (en production)
- Pas de suivi analytique (Google Analytics, etc.)
- Code open-source et auditable

---

## Conclusion

Cyber Mirror démontre qu'il est possible de créer une application pédagogique **immersive et engageante** tout en respectant **intégralement le RGPD**. 

Le principe fondamental appliqué : **« Ce qui n'est pas collecté ne peut pas être compromis »**.

---

**Date de rédaction** : Février 2025  
**Conformité** : RGPD (UE) 2016/679