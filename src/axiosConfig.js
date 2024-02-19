import axios from 'axios';
import { BASE_URL } from './api/api.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Cookie"] = cookies.get("accessToken")
// axios.defaults.headers.common["Cookie"] = cookies.get("refreshToken")

export default axios;