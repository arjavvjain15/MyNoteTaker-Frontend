import axios from 'axios';

const BACKEND_URL = axios.create({
    baseURL: import.meta.env.VITE_API_BASE
});

export default BACKEND_URL;
