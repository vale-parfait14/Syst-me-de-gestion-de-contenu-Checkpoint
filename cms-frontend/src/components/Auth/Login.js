import React, { useState } from 'react';
import { login } from '../services/apiFunctions';  // Assurez-vous que le chemin est correct

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Formulaire de connexion */}
    </form>
  );
};

export default Login;
