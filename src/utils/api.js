import axios from 'axios';

const api = axios.create({
  baseURL: /*process.env.REACT_APP_API_URL ||*/ 'https://api.github.com/',
});

export default api;