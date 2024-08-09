// api.js
import axios from 'axios';

// Créez une instance Axios avec la configuration de base
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000, // Optionnel : définit un délai d'attente pour les requêtes
});

// Ajouter un intercepteur pour gérer les erreurs globalement
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Une erreur est survenue :', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default api;
