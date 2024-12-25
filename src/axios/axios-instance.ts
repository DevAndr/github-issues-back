import axios from 'axios';
require('dotenv').config();

export const requestGithub = axios.create({
  baseURL: process.env.BASE_URL_GITHUB,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: 'Bearer <your-token>', // Укажите токен, если требуется
  },
});
