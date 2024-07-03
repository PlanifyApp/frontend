import { api } from '../apis/baseApi';

export const getTodoMonthlyList = async ({ year, month }: { year: number; month: number }) => {
    try {
        const { data } = await api.get(`/todo/month`, {
            params: {
                year,
                month,
            },
        });

        return data;
    } catch (error) {
        console.log('Error get todo monthly data:', error);
        throw error;
    }
};

export const getScheduleMonthlyList = async ({ year, month }: { year: number; month: number }) => {
    try {
        const { data } = await api.get(`/schedule/month`, {
            params: {
                year,
                month,
            },
        });

        return data;
    } catch (error) {
        console.log('Error get schedule monthly data:', error);
        throw error;
    }
};
