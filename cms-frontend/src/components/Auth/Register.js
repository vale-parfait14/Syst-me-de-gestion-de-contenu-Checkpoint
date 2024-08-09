import React, { useState } from 'react';
import { register } from '../services/apiFunctions';  // Assurez-vous que le chemin est correct

const Register = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ email, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Formulaire d'inscription */}
    </form>
  );
};

export default Register;
