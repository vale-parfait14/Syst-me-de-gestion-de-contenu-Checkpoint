import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ArticleList from './components/Articles/ArticleList';
import MediaUpload from './components/Media/MediaUpload';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/media" element={<MediaUpload token={token} />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
