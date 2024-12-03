import axios from 'axios';
import authService from './authService';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true, // Позволяет отправлять куки
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Флаг для предотвращения бесконечных циклов
// let isRefreshing = false;
// let failedQueue = [];
//
// const processQueue = (error, token = null) => {
//     failedQueue.forEach((prom) => {
//         if (error) {
//             prom.reject(error);
//         } else {
//             prom.resolve(token);
//         }
//     });
//
//     failedQueue = [];
// };
//
// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;
//
//         if (
//             error.response &&
//             error.response.status === 401 &&
//             !originalRequest._retry &&
//             !originalRequest.url.includes('/login') &&
//             !originalRequest.url.includes('/refresh')
//         ) {
//             if (isRefreshing) {
//                 return new Promise(function (resolve, reject) {
//                     failedQueue.push({ resolve, reject });
//                 })
//                     .then(() => api(originalRequest))
//                     .catch((err) => Promise.reject(err));
//             }
//
//             originalRequest._retry = true;
//             isRefreshing = true;
//
//             try {
//                 await authService.refreshToken();
//                 isRefreshing = false;
//                 processQueue(null);
//                 return api(originalRequest);
//             } catch (refreshError) {
//                 isRefreshing = false;
//                 processQueue(refreshError, null);
//
//                 // Получаем функцию logout из AuthContext
//                 const { logout } = require('../contexts/AuthContext');
//                 await logout();
//
//                 if (window.location.pathname !== '/login') {
//                     window.location.href = '/login';
//                 }
//                 return Promise.reject(refreshError);
//             }
//         }
//
//         return Promise.reject(error);
//     }
// );

export default api;
