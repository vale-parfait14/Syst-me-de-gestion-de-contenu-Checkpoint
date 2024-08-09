import React, { useState } from 'react';
import { uploadMedia } from '../services/apiFunctions';  // Assurez-vous que le chemin est correct

const MediaUpload = ({ token }) => {
  const [media, setMedia] = useState(null);

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', media);

    try {
      await uploadMedia(formData, token);
      // Gérer la réussite du téléchargement
    } catch (error) {
      console.error('Erreur lors du téléchargement des médias:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Télécharger</button>
    </div>
  );
};

export default MediaUpload;
