import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="navbar">
        <h1>CMS Dashboard</h1>
        <nav>
          <Link to="/articles">Articles</Link>
          <Link to="/media">Media</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </header>
      <main>
        <h2>Welcome to your CMS!</h2>
        <p>Use the navigation bar to access different sections of the CMS.</p>
      </main>
    </div>
  );
};

export default Dashboard;
