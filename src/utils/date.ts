export const dowKo = ['일', '월', '화', '수', '목', '금', '토'];

const date = new Date();
const thisYear = date.getFullYear();
const thisMonth = date.getMonth() + 1;
const thisMonthFirstDate = new Date(thisYear, thisMonth - 1, 1);
const thisMonthLastDate = new Date(thisYear, thisMonth, 0);
const hour = date.getHours();
const min = date.getMinutes();

export const currentDateInfo = {
    date,
    thisYear,
    thisMonth,
    thisMonthFirstDate,
    thisMonthLastDate,
    hour,
    min
};
