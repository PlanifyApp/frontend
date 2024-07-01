import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { currentDateInfo, dowKo } from '../../utils/date';
import { useRecoilValue } from 'recoil';
import { selectedDate } from '../../recoil/selectedDate';
import dayjs from 'dayjs';
import CircleIcon from '@mui/icons-material/Circle';
import { useMutation } from '@tanstack/react-query';
import { getTodoMonthlyList, getScheduleMonthlyList } from '../../services/calendarService';
import {
    CalendarDate,
    CalendarGrid,
    CalendarSelectedDate,
    CalendarToday,
    CalendarWrapper,
    ScheduleWrap,
    TodoCircleIcon
} from '../../assets/styles/calendar.styles';

export const CalendarComponent = ({ handleOnClick }: { handleOnClick: (date: string) => void }) => {
    const [year, setYear] = useState<number>(currentDateInfo.thisYear);
    const [month, setMonth] = useState<number>(currentDateInfo.thisMonth);
    const [firstDate, setFirstDate] = useState<Date>(currentDateInfo.thisMonthFirstDate);
    const [lastDate, setLastDate] = useState<Date>(currentDateInfo.thisMonthLastDate);
    const [calendar, setCalendar] = useState<JSX.Element[]>();
    const selectDate = useRecoilValue(selectedDate);
    const [todoList, setTodoList] = useState([]);
    const [scheduleList, setScheduleList] = useState<{ [key: number]: [] }>({});
    const { mutate: mutateTodoMonthlyList } = useMutation({
        mutationFn: () => getTodoMonthlyList({ year, month }),
        onSuccess: (data) => {
            if (data.status === 200) {
                setTodoList(data.todo);
            }
        }
    });
    const { mutate: mutateScheduleMonthlyList } = useMutation({
        mutationFn: () => getScheduleMonthlyList({ year, month }),
        onSuccess: (data) => {
            if (data.status === 200) {
                setScheduleList(data.schedule);
            }
        }
    });

    const handleLastMonth = () => {
        if (month === 1) {
            setMonth(12);
            setYear((prev) => prev - 1);
        } else {
            setMonth((prev) => prev - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 12) {
            setMonth(1);
            setYear((prev) => prev + 1);
        } else {
            setMonth((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const newFirstDate = new Date(year, month - 1, 1);
        setFirstDate(newFirstDate);

        const newLastDate = new Date(year, month, 0);
        setLastDate(newLastDate);

        mutateTodoMonthlyList();
        mutateScheduleMonthlyList();
    }, [year, month]);

    useEffect(() => {
        calendarGrid();
    }, [firstDate, lastDate, selectDate, todoList, scheduleList]);

    const calendarGrid = () => {
        const week = [];
        const weeksLen = Math.ceil((firstDate.getDay() + lastDate.getDate()) / 7);

        for (let i = 0; i < weeksLen; i++) {
            const row = [];

            for (let j = 0; j < 7; j++) {
                const date = i * 7 + j + 1 - firstDate.getDay();

                if (i === 0 && j < firstDate.getDay()) {
                    row.push(<Grid item mobile={1} key={date}></Grid>);
                } else if (i === weeksLen - 1 && j > lastDate.getDay()) {
                    row.push(<Grid item mobile={1} key={date}></Grid>);
                } else {
                    const dateFormatted = dayjs(`${year}-${month}-${date}`).format('YYYY-MM-DD');

                    row.push(
                        <Grid
                            item
                            mobile={1}
                            key={date}
                            color={j === 0 ? 'red' : j === 6 ? 'blue' : '#333'}
                            sx={{ position: 'relative', cursor: 'pointer' }}
                            onClick={() => handleOnClick(dateFormatted)}
                        >
                            {todoList[date] > 0 && (
                                <TodoCircleIcon>
                                    <CircleIcon />
                                </TodoCircleIcon>
                            )}
                            {currentDateInfo.thisYear === year &&
                            currentDateInfo.thisMonth === month &&
                            currentDateInfo.date.getDate() === date ? (
                                <CalendarToday variant="body1">{date}</CalendarToday>
                            ) : selectDate === dateFormatted ? (
                                <CalendarSelectedDate variant="body1">{date}</CalendarSelectedDate>
                            ) : (
                                <CalendarDate variant="body1">{date}</CalendarDate>
                            )}
                            <ScheduleWrap>
                                {scheduleList[date] &&
                                    scheduleList[date].map((data: any, idx: number) => (
                                        <Typography key={idx} color={data.color}>
                                            {data.title}
                                        </Typography>
                                    ))}
                            </ScheduleWrap>
                        </Grid>
                    );
                }
            }

            week.push(<>{row}</>);
        }

        setCalendar(week);
    };

    return (
        <Box height="100%" position="relative">
            <CalendarWrapper container columns={{ mobile: 3, laptop: 5 }}>
                <Grid item mobile={1} laptop={2} textAlign="right" key="prev">
                    <NavigateBeforeIcon onClick={handleLastMonth} />
                </Grid>
                <Grid item mobile={1} laptop={1} textAlign="center" key="month">
                    <Typography variant="h3">
                        {year}년 {month}월
                    </Typography>
                </Grid>
                <Grid item mobile={1} laptop={2} textAlign="left" key="next">
                    {!(
                        currentDateInfo.thisYear === year && currentDateInfo.thisMonth === month
                    ) && <NavigateNextIcon onClick={handleNextMonth} />}
                </Grid>
            </CalendarWrapper>
            <Grid container columns={7}>
                {dowKo.map((data, idx) => (
                    <Grid item mobile={1} key={idx}>
                        {data}
                    </Grid>
                ))}
            </Grid>
            <CalendarGrid container columns={7} sx={{ boxShadow: 1 }}>
                {calendar}
            </CalendarGrid>
        </Box>
    );
};
