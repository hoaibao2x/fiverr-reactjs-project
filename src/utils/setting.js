import axios from 'axios';
import { DOMAIN, TOKEN, TOKEN_CYBER } from './varsSetting;'

export const htttp = axios.create({
    baseURL: DOMAIN,
    timeout: 3000
});

htttp.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'tokenCybersoft': TOKEN_CYBER,
        'token': localStorage.getItem(TOKEN)
    };
    return config;
}, (errors) => {
    return Promise.reject(errors);
})