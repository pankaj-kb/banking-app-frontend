import axios from 'axios';
import { BASE_URL } from './api/api.js';

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");


if (accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

if (refreshToken) {
    axios.defaults.headers.common["Refresh-Token"] = refreshToken;
}

export default axios;
