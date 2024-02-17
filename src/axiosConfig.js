import axios from 'axios';
import { BASE_URL } from './api/api.js';

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export default axios;