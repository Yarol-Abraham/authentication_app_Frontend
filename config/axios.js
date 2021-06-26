import axios from 'axios';

const createAxios = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL
});

export default createAxios;