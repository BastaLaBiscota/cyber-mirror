# Moteur de calcul déterministe (Le "Cerveau")
# Basé sur la section 2.2 du PDF

WEIGHTS = {
    "password": 0.4,
    "browsing": 0.3,
    "email": 0.2,
    "social": 0.1
}

# Points max pour normalisation (Mise à jour pour 10 questions)
MAX_POINTS = {
    "password": 30, # Q1(10) + Q2(10) + Q3(10)
    "browsing": 30, # Q4(10) + Q5(10) + Q6(10)
    "email": 28,    # Q7(10) + Q8(10) + Q9(8)
    "social": 10    # Q10(10)
}

def calculate_cyber_score(answers):
    scores = {
        "password": 0,
        "browsing": 0,
        "email": 0,
        "social": 0
    }

    # --- Mots de passe ---
    q1 = answers.get('q1')
    if q1 == 'simple': scores["password"] += 10
    elif q1 == 'variations': scores["password"] += 5
    elif q1 == 'dont_know': scores["password"] += 8

    q2 = answers.get('q2')
    if q2 == 'notes': scores["password"] += 10
    elif q2 == 'browser': scores["password"] += 6
    elif q2 == 'memory': scores["password"] += 4

    q3 = answers.get('q3')
    if q3 == 'never': scores["password"] += 10
    elif q3 == 'rarely': scores["password"] += 7
    elif q3 == 'sometimes': scores["password"] += 4

    # --- Navigation Web ---
    q4 = answers.get('q4')
    if q4 == 'never': scores["browsing"] += 10
    elif q4 == 'rarely': scores["browsing"] += 7
    elif q4 == 'often': scores["browsing"] += 3

    q5 = answers.get('q5') # NOUVELLE QUESTION
    if q5 == 'download': scores["browsing"] += 10
    elif q5 == 'ignore': scores["browsing"] += 8
    elif q5 == 'sometimes': scores["browsing"] += 4

    q6 = answers.get('q6')
    if q6 == 'accept_all': scores["browsing"] += 8 # Ajusté selon PDF
    elif q6 == 'dont_know': scores["browsing"] += 8
    elif q6 == 'necessary': scores["browsing"] += 2

    # --- Emails ---
    q7 = answers.get('q7')
    if q7 == 'reply': scores["email"] += 10
    elif q7 == 'click': scores["email"] += 8
    elif q7 == 'ignore': scores["email"] += 3

    q8 = answers.get('q8') # NOUVELLE QUESTION
    if q8 == 'always': scores["email"] += 10
    elif q8 == 'interest': scores["email"] += 7
    elif q8 == 'scan': scores["email"] += 2

    q9 = answers.get('q9')
    if q9 == 'no': scores["email"] += 8
    elif q9 == 'uncertain': scores["email"] += 6
    elif q9 == 'yes_but': scores["email"] += 4

    # --- Réseaux Sociaux ---
    q10 = answers.get('q10')
    if q10 == 'dont_care': scores["social"] += 10
    elif q10 == 'often': scores["social"] += 7
    elif q10 == 'sometimes': scores["social"] += 4

    # Normalisation et calcul pondéré (0-100)
    # Plus le score est haut, plus le RISQUE est élevé
    
    weighted_score = (
        (scores["password"] / MAX_POINTS["password"]) * 100 * WEIGHTS["password"] +
        (scores["browsing"] / MAX_POINTS["browsing"]) * 100 * WEIGHTS["browsing"] +
        (scores["email"] / MAX_POINTS["email"]) * 100 * WEIGHTS["email"] +
        (scores["social"] / MAX_POINTS["social"]) * 100 * WEIGHTS["social"]
    )

    return {
        "totalRiskScore": round(weighted_score),
        "breakdown": {
            "password": round((scores["password"] / MAX_POINTS["password"]) * 100),
            "browsing": round((scores["browsing"] / MAX_POINTS["browsing"]) * 100),
            "email": round((scores["email"] / MAX_POINTS["email"]) * 100),
            "social": round((scores["social"] / MAX_POINTS["social"]) * 100)
        }
    }
