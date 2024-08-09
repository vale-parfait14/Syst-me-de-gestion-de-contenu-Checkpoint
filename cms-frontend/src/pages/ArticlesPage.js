// src/pages/ArticlePage.js
import React from 'react';
import DownloadButton from '../components/DownloadButton';

const ArticlePage = () => {
  const fileUrl = '/path/to/file.pdf'; // URL du fichier à télécharger

  return (
    <div>
      <h1>Article</h1>
      <DownloadButton fileUrl={fileUrl} />
    </div>
  );
};

export default ArticlePage;
