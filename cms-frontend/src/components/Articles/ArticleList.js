

import React, { useEffect, useState } from 'react';
import { getArticles } from '../services/apiFunctions';  // Assurez-vous que le chemin est correct

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        setArticles(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Liste des Articles</h1>
      {/* Afficher les articles */}
    </div>
  );
};

export default ArticleList;
