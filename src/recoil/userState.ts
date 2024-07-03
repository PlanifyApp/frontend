import { atom } from 'recoil';
import { UserData } from '../type/userType';

export const userState = atom<UserData>({
    key: 'userState',
    default: {
        id: '',
        email: '',
        name: '',
        nickname: '',
        image: '',
    },
});
