import { api } from '../apis/baseApi';

export const saveGroupData = async ({ title, color }: { title: string; color: string }) => {
    try {
        const { data } = await api.post('/group/store', { title, color });

        return data;
    } catch (error) {
        console.log('Error save group data:', error);
        throw error;
    }
};
