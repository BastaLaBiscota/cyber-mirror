import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'white',
      padding: '1.5rem 0',
      borderBottom: '1px solid #e5e7eb',
      marginBottom: '2rem'
    }}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'var(--primary)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}>
            🪞
          </div>
          <h1 style={{margin: 0, fontSize: '1.5rem', fontWeight: 900}}>
            CYBER<span style={{color: 'var(--primary)'}}>MIRROR</span>
          </h1>
        </div>
        <div style={{color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500}}>
          L'IA qui révèle vos failles numériques
        </div>
      </div>
    </header>
  );
};

export default Header;