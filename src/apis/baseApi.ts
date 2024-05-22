import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { getCookieToken } from './cookie';

export const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000,
    withCredentials: true
});

// 요청 인터셉터
api.interceptors.request.use(
    (config) => {
        const token = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'));
        if (token) {
            config.headers['X-XSRF-TOKEN'] = token[2];
        }

        if (getCookieToken() !== '') {
            config.headers['Authorization'] = `Bearer ${getCookieToken()}`;
        }
        return config;
    },
    (error) => {
        console.log('error,', error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터
api.interceptors.response.use(
    (res: AxiosResponse) => {
        return res.data;
    },
    (error) => {
        throw error;
    }
);
