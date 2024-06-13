import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import {
    CustomGridCont,
    CustomGridTit,
    CustomSelectedTypo,
    CustomThisMonthTypo,
    CustomTodayTypo,
    TodoCircleBox
} from '../../assets/styles/body.styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { currentDateInfo, dowKo } from '../../utils/date';
import { useRecoilValue } from 'recoil';
import { selectedDate } from '../../recoil/selectedDate';
import dayjs from 'dayjs';
import { api } from '../../apis/baseApi';
import CircleIcon from '@mui/icons-material/Circle';

export const CalendarComponent = ({ handleOnClick }: { handleOnClick: (date: string) => void }) => {
    const [year, setYear] = useState<number>(currentDateInfo.thisYear);
    const [month, setMonth] = useState<number>(currentDateInfo.thisMonth);
    const [firstDate, setFirstDate] = useState<Date>(currentDateInfo.thisMonthFirstDate);
    const [lastDate, setLastDate] = useState<Date>(currentDateInfo.thisMonthLastDate);
    const [calendar, setCalendar] = useState<JSX.Element[]>();
    const selectDate = useRecoilValue(selectedDate);
    const [todoList, setTodoList] = useState([]);

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

    const handleMonthTodo = async () => {
        try {
            const { data } = await api.get(`/todo/month`, {
                params: {
                    year,
                    month
                }
            });

            if (data.status === 200) {
                console.log(data.todo);
                setTodoList(data.todo);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const newFirstDate = new Date(year, month - 1, 1);
        setFirstDate(newFirstDate);

        const newLastDate = new Date(year, month, 0);
        setLastDate(newLastDate);

        handleMonthTodo();
    }, [year, month]);

    useEffect(() => {
        calendarGrid();
    }, [firstDate, lastDate, selectDate, todoList]);

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
                                <TodoCircleBox>
                                    <CircleIcon />
                                </TodoCircleBox>
                            )}
                            {currentDateInfo.thisYear === year &&
                            currentDateInfo.thisMonth === month &&
                            currentDateInfo.date.getDate() === date ? (
                                <CustomTodayTypo variant="body1">{date}</CustomTodayTypo>
                            ) : selectDate === dateFormatted ? (
                                <CustomSelectedTypo variant="body1">{date}</CustomSelectedTypo>
                            ) : (
                                <CustomThisMonthTypo variant="body1">{date}</CustomThisMonthTypo>
                            )}
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
            <CustomGridTit container columns={{ mobile: 3, laptop: 5 }}>
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
            </CustomGridTit>
            {/* <CustomTabBox>
                <Tabs
                    value={tabVal}
                    onChange={handleTabChange}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                >
                    <CustomTab label="일" disableRipple />
                    <CustomTab label="주" disableRipple />
                    <CustomTab label="월" disableRipple />
                    <CustomTab label="년" disableRipple />
                </Tabs>
            </CustomTabBox> */}
            <Grid container columns={7}>
                {dowKo.map((data, idx) => (
                    <Grid item mobile={1} key={idx}>
                        {data}
                    </Grid>
                ))}
            </Grid>
            <CustomGridCont container columns={7} sx={{ boxShadow: 1 }}>
                {calendar}
            </CustomGridCont>
        </Box>
    );
};
