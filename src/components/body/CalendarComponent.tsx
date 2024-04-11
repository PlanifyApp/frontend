import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { CustomBox, CustomGridCont, CustomGridTit } from '../../assets/styles/body.styles';
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
        const width = gridRef.current?.clientWidth;
        setHeight(width ? Math.floor(width / 7) + 20 : 0);
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

        for (let i = 0; i < weeksLen; i++) {
            const row = [];

            for (let j = 0; j < 7; j++) {
                const date = i * 7 + j + 1 - monthFirstDate.getDay();

                if (i === 0 && j < monthFirstDate.getDay()) {
                    row.push(
                        <Grid item mobile={1} key={date} className="col" height={height}></Grid>
                    );
                } else if (i === weeksLen - 1 && j > monthFirstDate.getDay()) {
                    row.push(
                        <Grid item mobile={1} key={date} className="col" height={height}></Grid>
                    );
                } else {
                    row.push(
                        <Grid item mobile={1} key={date} className="col" height={height}>
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
        <Box>
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
            <CustomBox ref={gridRef} sx={{ boxShadow: 1 }}>
                {calendar}
            </CustomBox>
        </Box>
    );
};
