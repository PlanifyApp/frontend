import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import {
    CustomCalendarContBox,
    CustomGridCont,
    CustomGridTit
} from '../../assets/styles/body.styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const dowKo = ['일', '월', '화', '수', '목', '금', '토', '일'];
const milliseconds = 24 * 60 * 60 * 1000;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const dow = dowKo[date.getDay()];
const monthFirstDate = new Date(year, month - 1, 1);
const monthLastDate = new Date(year, month, 0);
const weeksLen = Math.ceil((monthFirstDate.getDay() + monthLastDate.getDate()) / 7);

export const CalendarComponent = () => {
    const [calendar, setCalendar] = useState<JSX.Element[]>();
    const [height, setHeight] = useState<number>(0);
    const gridRef = useRef<HTMLDivElement | null>(null);

    const getHeight = () => {
        const el = gridRef.current;
        const clientHeight = el ? el.clientHeight : 0;
        const paddingHeight = el ? parseInt(window.getComputedStyle(el).paddingTop) : 0;
        const resHeight = clientHeight - paddingHeight;

        console.log('pt', paddingHeight);
        console.log('height', resHeight);
        setHeight(resHeight ? Math.floor(resHeight / 5) : 0);
    };

    useEffect(() => {
        getHeight();

        window.addEventListener('resize', getHeight);

        return () => {
            window.removeEventListener('resize', getHeight);
        };
    }, []);

    useEffect(() => {
        calendarGrid();
    }, [height]);

    const calendarGrid = () => {
        const week = [];

        for (let i = 0; i < 5; i++) {
            const row = [];

            for (let j = 0; j < 7; j++) {
                const date = i * 7 + j + 1 - monthFirstDate.getDay();

                if (i === 0 && j < monthFirstDate.getDay()) {
                    row.push(<Grid item mobile={1} key={date}></Grid>);
                } else if (i === 4 && j > monthFirstDate.getDay()) {
                    row.push(<Grid item mobile={1} key={date}></Grid>);
                } else {
                    row.push(
                        <Grid item mobile={1} key={date}>
                            <Typography variant="body2">{date}</Typography>
                        </Grid>
                    );
                }
            }

            week.push(
                <CustomGridCont container columns={7} key={i}>
                    {row}
                </CustomGridCont>
            );
        }

        setCalendar(week);
    };

    return (
        <Box height="100%" position="relative" ref={gridRef}>
            <CustomGridTit container columns={7}>
                <Grid item mobile={3} textAlign="right">
                    <NavigateBeforeIcon />
                </Grid>
                <Grid item mobile={1} textAlign="center">
                    <Typography variant="h3">{month}월</Typography>
                </Grid>
                <Grid item mobile={3} textAlign="left">
                    <NavigateNextIcon />
                </Grid>
            </CustomGridTit>
            <CustomCalendarContBox sx={{ boxShadow: 1 }}>{calendar}</CustomCalendarContBox>
        </Box>
    );
};
