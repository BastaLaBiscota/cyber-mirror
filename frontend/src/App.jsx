import React, { useState } from 'react';
import Header from './components/Header';
import Questionnaire from './components/Questionnaire';
import ResultsSummary from './components/ResultsSummary';
import { analyzeProfile } from './services/api';

function App() {
  const [step, setStep] = useState('questionnaire');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFinish = async (answers) => {
    setStep('loading');
    setError(null);
    try {
      const data = await analyzeProfile(answers);
      setResults(data);
      setStep('results');
    } catch (err) {
      setError("Une erreur est survenue lors de l'analyse. Veuillez vérifier que le serveur est bien lancé.");
      setStep('questionnaire');
    }
  };

  const handleReset = () => {
    setResults(null);
    setStep('questionnaire');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header />
      
      <main className="container mx-auto px-4 mt-8">
        {error && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {step === 'questionnaire' && (
          <Questionnaire onFinish={handleFinish} loading={false} />
        )}

        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
            <p className="text-xl font-semibold text-gray-700">Analyse de votre profil par Coach Cyber, cela peut prendre quelques minutes...</p>
          </div>
        )}

        {step === 'results' && results && (
          <ResultsSummary results={results} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}

export default App;
