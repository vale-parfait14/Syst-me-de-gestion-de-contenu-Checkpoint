// src/containers/DownloadContainer.js
import React from 'react';
import DownloadButton from '../components/DownloadButton';

const DownloadContainer = () => {
  const fileUrl = '/path/to/file.pdf'; // URL du fichier à télécharger

  return (
    <div>
      <DownloadButton fileUrl={fileUrl} />
    </div>
  );
};

export default DownloadContainer;
