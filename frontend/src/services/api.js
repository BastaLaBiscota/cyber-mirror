import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const analyzeProfile = async (answers) => {
  try {
    const response = await axios.post(`${API_URL}/api/analyze`, answers, {
      timeout: 300000 // 300 secondes en millisecondes
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'analyse:', error);
    throw error;
  }
};
