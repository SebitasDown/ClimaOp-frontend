import axios from 'axios';

const api = axios.create({
    baseURL: 'https://climaop.onrender.com'
});

export default api;
