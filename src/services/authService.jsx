import api from './api';

const authService = {
    async login(credentials) {
        try {
            const response = await api.post('/login', credentials);
            return response.data.user;
        } catch (error) {
            // console.error('Ошибка входа:', error.response?.data || error.message);
            throw error;
        }
    },

    async register(userData) {
        try {
            const response = await api.post('/register', userData);
            return response.data.user;
        } catch (error) {
            // console.error('Ошибка регистрации:', error.response?.data || error.message);
            throw error;
        }
    },

    async logout() {
        try {
            await api.post('/logout');
        } catch (error) {
            // console.error('Ошибка при выходе:', error.response?.data || error.message);
            throw error;
        }
    },

    async getCurrentUser() {
        const response = await api.post('/user');
        return response.data.user;
    },

    async refreshToken() {
        try {
            await api.post('/refresh');
        } catch (error) {
            // console.error('Ошибка обновления токена:', error.response?.data || error.message);
            throw error;
        }
    },
    async checkCookies() {
        const response = await api.post("/check-cookie");
        return response.data;
    }
};

export default authService;