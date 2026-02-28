import React, { useState } from 'react';

const questions = [
  {
    id: 'q1',
    category: 'password',
    text: 'Quel type de mot de passe utilisez-vous généralement ?',
    options: [
      { value: 'unique', label: 'Mot de passe unique et complexe pour chaque site', points: 0 },
      { value: 'variations', label: 'Variations du même mot de passe', points: 5 },
      { value: 'simple', label: 'Mot de passe simple (ex: 123456, azerty)', points: 10 },
      { value: 'dont_know', label: 'Je ne sais pas trop', points: 8 },
    ]
  },
  {
    id: 'q2',
    category: 'password',
    text: 'Comment gérez-vous vos mots de passe ?',
    options: [
      { value: 'manager', label: 'Gestionnaire de mots de passe', points: 0 },
      { value: 'memory', label: 'Mémorisation personnelle', points: 4 },
      { value: 'notes', label: 'Notes non sécurisées (papier, fichier texte)', points: 10 },
      { value: 'browser', label: 'Navigateur web uniquement', points: 6 },
    ]
  },
  {
    id: 'q3',
    category: 'password',
    text: 'Utilisez-vous l\'authentification à deux facteurs (2FA) ?',
    options: [
      { value: 'always', label: 'Toujours quand c\'est possible', points: 0 },
      { value: 'sometimes', label: 'Parfois', points: 4 },
      { value: 'rarely', label: 'Rarement', points: 7 },
      { value: 'never', label: 'Jamais', points: 10 },
    ]
  },
  {
    id: 'q4',
    category: 'browsing',
    text: 'Vérifiez-vous la présence du cadenas (HTTPS) sur les sites ?',
    options: [
      { value: 'always', label: 'Toujours', points: 0 },
      { value: 'often', label: 'Souvent', points: 3 },
      { value: 'rarely', label: 'Rarement', points: 7 },
      { value: 'never', label: 'Jamais', points: 10 },
    ]
  },
  {
    id: 'q5',
    category: 'browsing',
    text: 'Que faites-vous si vous arrivez sur un site web inconnu ou suspect ?',
    options: [
      { value: 'leave', label: 'Je quitte immédiatement le site', points: 0 },
      { value: 'sometimes', label: 'Je reste mais je ne donne aucune info', points: 4 },
      { value: 'ignore', label: 'Je n\'y prête pas attention', points: 8 },
      { value: 'download', label: 'Je télécharge ce dont j\'ai besoin malgré tout', points: 10 },
    ]
  },
  {
    id: 'q6',
    category: 'browsing',
    text: 'Comment gérez-vous les cookies sur les sites web ?',
    options: [
      { value: 'personalize', label: 'Personnalisation systématique', points: 0 },
      { value: 'necessary', label: 'Accepter uniquement les cookies nécessaires', points: 2 },
      { value: 'accept_all', label: 'Tout accepter par flemme', points: 8 },
      { value: 'dont_know', label: 'Je ne sais pas ce que c\'est', points: 8 },
    ]
  },
  {
    id: 'q7',
    category: 'email',
    text: 'Si vous recevez un email vous promettant un gain d\'argent immédiat :',
    options: [
      { value: 'verify', label: 'Je vérifie l\'expéditeur avec soin', points: 0 },
      { value: 'click', label: 'Je clique sur le lien par curiosité', points: 8 },
      { value: 'reply', label: 'Je réponds pour en savoir plus', points: 10 },
      { value: 'ignore', label: 'Je l\'ignore ou le supprime', points: 3 },
    ]
  },
  {
    id: 'q8',
    category: 'email',
    text: 'Ouvrez-vous les pièces jointes d\'un email d\'un expéditeur inconnu ?',
    options: [
      { value: 'never', label: 'Jamais', points: 0 },
      { value: 'scan', label: 'Je les scanne d\'abord avec un antivirus', points: 2 },
      { value: 'interest', label: 'Seulement si le sujet m\'intéresse', points: 7 },
      { value: 'always', label: 'Toujours, c\'est peut-être important', points: 10 },
    ]
  },
  {
    id: 'q9',
    category: 'email',
    text: 'Savez-vous reconnaître une tentative de phishing ?',
    options: [
      { value: 'easy', label: 'Oui, très facilement', points: 0 },
      { value: 'yes_but', label: 'Oui, mais pas toujours', points: 4 },
      { value: 'no', label: 'Non, pas du tout', points: 8 },
      { value: 'uncertain', label: 'Je ne suis pas sûr(e)', points: 6 },
    ]
  },
  {
    id: 'q10',
    category: 'social',
    text: 'Partagez-vous des informations personnelles sur les réseaux sociaux ?',
    options: [
      { value: 'rarely', label: 'Rarement / Compte privé', points: 0 },
      { value: 'sometimes', label: 'Parfois', points: 4 },
      { value: 'often', label: 'Souvent', points: 7 },
      { value: 'dont_care', label: 'Je ne fais pas attention', points: 10 },
    ]
  }
];

const Questionnaire = ({ onFinish, loading }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const isComplete = Object.keys(answers).length === questions.length;

  return (
    <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
      <h2 style={{color: 'var(--primary)', marginBottom: '1rem'}}>Questionnaire de Risque Cyber</h2>
      <p style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>Répondez honnêtement pour obtenir une analyse précise de votre profil.</p>

      {questions.map((q) => (
        <div key={q.id} className="question-block">
          <p style={{fontWeight: 'bold', marginBottom: '1rem'}}>{q.text}</p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            {q.options.map((opt) => (
              <label key={opt.value} className="option-label">
                <input
                  type="radio"
                  name={q.id}
                  value={opt.value}
                  checked={answers[q.id] === opt.value}
                  onChange={() => handleChange(q.id, opt.value)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div style={{marginTop: '2rem'}}>
        {loading && (
          <div style={{
            padding: '1rem',
            backgroundColor: '#f0f9ff',
            color: '#0369a1',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #bae6fd',
            fontSize: '0.9rem'
          }}>
            🤖 <strong>Analyse du Coach Cyber en cours...</strong><br/>
            Cela peut prendre 1 à 2 minutes selon la puissance de votre ordinateur (IA locale).
          </div>
        )}
        
        <button
          onClick={() => onFinish(answers)}
          disabled={!isComplete || loading}
          style={{width: '100%'}}
        >
          {loading ? 'Traitement...' : 'Obtenir mon analyse'}
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;