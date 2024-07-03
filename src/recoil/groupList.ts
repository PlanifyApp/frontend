import { atom } from 'recoil';
import { groupItem } from '../type/groupType';

export const groupList = atom<groupItem[]>({
    key: 'groupList',
    default: [],
});
