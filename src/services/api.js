import axios from 'axios';

const api = axios.create({
    baseURL: 'http://24.10.3.104:3333'
})

export default api;