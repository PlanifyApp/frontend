import { api } from '../apis/baseApi';

export const getTodoList = async (date: string) => {
    try {
        const { data } = await api.get('/todo/list', {
            params: {
                date: date
            }
        });

        return data;
    } catch (error) {
        console.log('Error get todo list:', error);
        throw error;
    }
};

export const updateTodoState = async (id: string) => {
    try {
        const { data } = await api.put(`/todo/check/${id}`);

        return data;
    } catch (error) {
        console.log('Error updating todo state:', error);
        throw error;
    }
};

export const saveTodoData = async ({ title, date }: { title: string; date: string }) => {
    try {
        const { data } = await api.post('/todo/store', {
            title,
            date
        });

        return data;
    } catch (error) {
        console.log('Error save todo data:', error);
        throw error;
    }
};
