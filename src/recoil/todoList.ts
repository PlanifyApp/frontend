import { atom } from 'recoil';
import { todoItem } from '../type/todoType';

export const todoList = atom<todoItem[]>({
    key: 'todoList',
    default: [],
});
