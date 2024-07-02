import { api } from '../apis/baseApi';

export const getUserData = async () => {
    try {
        const { data } = await api.get('/user/info');
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
