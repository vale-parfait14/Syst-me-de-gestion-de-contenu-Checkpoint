// src/components/DownloadButton.js
import React from 'react';

const DownloadButton = ({ fileUrl }) => {
  return (
    <a href={fileUrl} download>
      <button>Télécharger</button>
    </a>
  );
};

export default DownloadButton;
