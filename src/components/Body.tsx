import React, { ReactElement, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { CommonTextField } from '../assets/styles/common.styles';
import { Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { JSXElement } from '@babel/types';
import { CustomGrid } from '../assets/styles/body.styles';
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

export const Body = () => {
    const [calendar, setCalendar] = useState<JSX.Element[]>();
    const [height, setHeight] = useState<number>(0);

    const calendarGrid = () => {
        const week = [];

        for (let i = 0; i < weeksLen; i++) {
            const row = [];

            for (let j = 0; j < 7; j++) {
                const date = i * 7 + j + 1 - monthFirstDate.getDay();

                if (i === 0 && j < monthFirstDate.getDay()) {
                    row.push(
                        <Grid item desktop={1} key={date}>
                            {date} 지난달
                        </Grid>
                    );
                } else if (i === weeksLen - 1 && j > monthFirstDate.getDay()) {
                    row.push(
                        <Grid item desktop={1} key={date}>
                            {date} 다음달
                        </Grid>
                    );
                } else {
                    row.push(
                        <Grid item desktop={1} key={date}>
                            {date} 이번달
                        </Grid>
                    );
                }
            }

            week.push(
                <CustomGrid container columns={7} key={i}>
                    {row}
                </CustomGrid>
            );
        }

        setCalendar(week);
    };

    useEffect(() => {
        const getHeight = () => {
            const width = document.querySelector('.MuiGrid-item')?.clientWidth;
            console.log(width);
            setHeight(width ?? 0);
        };

        getHeight();
        calendarGrid();

        window.addEventListener('resize', () => {
            getHeight();
        });

        return () => {
            window.removeEventListener('resize', () => {
                getHeight();
            });
        };
    }, []);

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
            <Box width="100%" display="flex" justifyContent="flex-end">
                <CommonTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box>
                <Grid container columns={7}>
                    <Grid item desktop={3} textAlign="right">
                        <NavigateBeforeIcon />
                    </Grid>
                    <Grid item desktop={1} textAlign="center">
                        <Typography variant="h3">{month}월</Typography>
                    </Grid>
                    <Grid item desktop={3} textAlign="left">
                        <NavigateNextIcon />
                    </Grid>
                </Grid>
                <Box>{calendar}</Box>
            </Box>
        </Box>
    );
};
