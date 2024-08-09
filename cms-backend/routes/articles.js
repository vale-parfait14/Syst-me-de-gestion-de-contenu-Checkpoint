const express = require('express');
const router = express.Router();
const { createArticle, getArticles } = require('../controllers/articleController');

// Route pour créer un article
router.post('/', createArticle);

// Route pour obtenir tous les articles
router.get('/', getArticles);

module.exports = router;
