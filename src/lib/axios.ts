import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

export default api;
