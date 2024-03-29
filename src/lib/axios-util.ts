import axios from 'axios';

const $axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export const setHeaderToken = (token: string) => {
    $axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};

export const removeHeaderToken = () => {
    $axios.interceptors.request.use(config => {
        config.headers.Authorization = null;
        return config;
    });
};

export default $axios;