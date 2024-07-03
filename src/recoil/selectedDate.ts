import { atom } from 'recoil';
import { currentDateInfo } from '../utils/date';
import dayjs from 'dayjs';

export const selectedDate = atom<string>({
    key: 'selectedDate',
    default: dayjs(currentDateInfo.date).format('YYYY-MM-DD'),
});
