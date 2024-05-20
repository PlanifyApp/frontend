import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { getCookieToken } from './cookie';

export const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000
});

// 요청 인터셉터
api.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${getCookieToken()}`;
        return config;
    },
    (error) => {
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
