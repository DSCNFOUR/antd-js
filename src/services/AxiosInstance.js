// services/AxiosInstance.js
import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://apiv3.shanbay.com/weapps/dailyquote/quote',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export default AxiosInstance;