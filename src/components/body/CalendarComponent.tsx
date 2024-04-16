import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Grid, Tabs, Typography } from '@mui/material';
import {
    CustomGridCont,
    CustomGridTit,
    CustomTab,
    CustomTabBox,
    CustomThisMonthTypo
} from '../../assets/styles/body.styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ListComponent } from '../aside/ListComponent';

export const dowKo = ['일', '월', '화', '수', '목', '금', '토', '일'];

export const date = new Date();
export const thisYear = date.getFullYear();
export const thisMonth = date.getMonth() + 1;
export const thisMonthFirstDate = new Date(thisYear, thisMonth - 1, 1);
export const thisMonthLastDate = new Date(thisYear, thisMonth, 0);

export const CalendarComponent = () => {
    const [year, setYear] = useState<number>(thisYear);
    const [month, setMonth] = useState<number>(thisMonth);
    const [firstDate, setFirstDate] = useState<Date>(thisMonthFirstDate);
    const [lastDate, setLastDate] = useState<Date>(thisMonthLastDate);
    const [calendar, setCalendar] = useState<JSX.Element[]>();

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
    }, [year, month]);

    useEffect(() => {
        calendarGrid();
    }, [firstDate, lastDate]);

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
                    row.push(
                        <Grid item mobile={1} key={date}>
                            <CustomThisMonthTypo variant="body1">{date}</CustomThisMonthTypo>
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
                    {!(thisYear === year && thisMonth === month) && (
                        <NavigateNextIcon onClick={handleNextMonth} />
                    )}
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
            <CustomGridCont container columns={7} sx={{ boxShadow: 1 }}>
                {calendar}
            </CustomGridCont>
            <Box sx={{ display: { mobile: 'flex', laptop: 'none' } }}>
                <Box py="25px" borderTop={1} borderColor="secondary.main">
                    <Typography variant="h5">todo List</Typography>
                    <ListComponent />
                </Box>
            </Box>
        </Box>
    );
};
