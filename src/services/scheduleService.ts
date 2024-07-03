import { api } from '../apis/baseApi';

export const saveScheduleData = async ({
    title,
    memo,
    stDate,
    enDate,
    groupId,
}: {
    title: string;
    memo: string;
    stDate: string;
    enDate: string;
    groupId: string;
}) => {
    try {
        const { data } = await api.post('/schedule/store', {
            title,
            memo,
            stDate,
            enDate,
            groupId,
        });

        return data;
    } catch (error) {
        console.log('Error save schedule data:', error);
        throw error;
    }
};
