import React from 'react';
import RadarChart from './RadarChart';

const ResultsSummary = ({ results, onReset }) => {
  const { score, details, explanation } = results;

  const getRiskLevel = (s) => {
    if (s < 30) return { label: 'Faible', color: '#10b981', bg: '#ecfdf5' };
    if (s < 60) return { label: 'Modéré', color: '#f59e0b', bg: '#fffbeb' };
    return { label: 'Élevé', color: '#ef4444', bg: '#fef2f2' };
  };

  const risk = getRiskLevel(score);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div className="card results-grid">
        <div>
          <h2 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>Votre Score de Risque</h2>
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 1rem',
            borderRadius: '1rem',
            fontWeight: 'bold',
            backgroundColor: risk.bg,
            color: risk.color,
            marginBottom: '1rem'
          }}>
            Risque {risk.label}
          </div>
          <div className="score-display">
            {score}<span style={{fontSize: '1.5rem', color: '#9ca3af'}}>/100</span>
          </div>
          <p style={{color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '1rem'}}>
            Plus le score est élevé, plus votre exposition aux risques numériques est importante.
          </p>
        </div>
        <div style={{height: '300px'}}>
           <RadarChart data={details} />
        </div>
      </div>

      <div className="ia-analysis">
        <h3 style={{marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span>🤖</span> L'Analyse de Coach Cyber
        </h3>
        <div style={{whiteSpace: 'pre-wrap', lineHeight: '1.7'}}>
          {explanation}
        </div>
      </div>

      <button onClick={onReset} style={{backgroundColor: '#e5e7eb', color: '#374151'}}>
        Recommencer le test
      </button>
    </div>
  );
};

export default ResultsSummary;