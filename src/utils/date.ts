export const dowKo = ['일', '월', '화', '수', '목', '금', '토', '일'];
// const milliseconds = 24 * 60 * 60 * 1000;

export const date = new Date();
export const thisYear = date.getFullYear();
export const thisMonth = date.getMonth() + 1;
// const day = date.getDate();
// const dow = dowKo[date.getDay()];
export const thisMonthFirstDate = new Date(thisYear, thisMonth - 1, 1);
export const thisMonthLastDate = new Date(thisYear, thisMonth, 0);
// const weeksLen = Math.ceil((monthFirstDate.getDay() + monthLastDate.getDate()) / 7);
