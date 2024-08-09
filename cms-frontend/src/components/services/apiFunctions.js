// src/api/apiFunctions.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/auth/login`, userData);

export const createArticle = (articleData, token) => axios.post(`${API_URL}/articles`, articleData, {
  headers: { 'x-auth-token': token },
});

export const getArticles = () => axios.get(`${API_URL}/articles`);

export const uploadMedia = (formData, token) => axios.post(`${API_URL}/media/upload`, formData, {
  headers: { 'x-auth-token': token, 'Content-Type': 'multipart/form-data' },
});

export const getMedia = () => axios.get(`${API_URL}/media`);
