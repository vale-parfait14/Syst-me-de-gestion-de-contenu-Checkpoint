const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

// Importer les routes
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articles');
const mediaRoutes = require('./routes/media');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/media', mediaRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  