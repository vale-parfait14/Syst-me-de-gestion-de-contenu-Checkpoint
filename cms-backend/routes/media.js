const express = require('express');
const router = express.Router();
const { uploadMedia, getMedia } = require('../controllers/mediaController');

// Route pour uploader un média
router.post('/upload', uploadMedia);

// Route pour obtenir tous les médias
router.get('/', getMedia);

module.exports = router;
