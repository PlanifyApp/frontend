import { Box, Grid, Typography, styled } from '@mui/material';

export const CalendarDate = styled(Typography)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const CalendarToday = styled(CalendarDate)(({ theme }) => ({
    top: '15px',
    left: '13px',
    width: '32px',
    height: '32px',
    textAlign: 'center',
    lineHeight: '30px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
}));

export const CalendarSelectedDate = styled(CalendarDate)(({ theme }) => ({
    top: '15px',
    left: '13px',
    width: '32px',
    height: '32px',
    textAlign: 'center',
    lineHeight: '30px',
    color: '#fff',
    background: theme.palette.primary.main,
    borderRadius: '50%',
}));

export const ScheduleWrap = styled(Box)`
    padding: 45px 20px 20px 20px;
`;

export const CalendarWrapper = styled(Grid)`
    position: absolute;
    top: -3em;
`;

export const CalendarGrid = styled(Grid)(({ theme }) => ({
    height: '100%',
    borderRadius: '15px',
    overflow: 'hidden',
    '& .MuiGrid-item': {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        border: `1px solid ${theme.palette.secondary.main}`,
        borderWidth: '1px 1px 0 0',
    },

    '& .MuiGrid-item:nth-of-type(7n)': {
        borderRight: 'none',
    },

    '& .MuiGrid-item:nth-of-type(-n+7)': {
        borderTop: 'none',
    },
}));

export const TodoCircleIcon = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '22px',
    left: '48px',

    svg: {
        width: '15px',
        height: '15px',
        color: theme.palette.primary.main,
    },
}));
