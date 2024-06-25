import { Box, Grid, Tab, TextField, Typography, styled } from '@mui/material';

export const CustomTopBox = styled(Grid)`
    position: absolute;
    left: 0;
`;

export const CustomCalendarBox = styled(Box)`
    height: 100%;
    padding-top: 6em;
`;

export const CustomGridTit = styled(Grid)`
    position: absolute;
    top: -3em;
`;

export const CustomGridCont = styled(Grid)(({ theme }) => ({
    height: '100%',
    borderRadius: '15px',
    overflow: 'hidden',
    '& .MuiGrid-item': {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        border: `1px solid ${theme.palette.secondary.main}`,
        borderWidth: '1px 1px 0 0'
    },

    '& .MuiGrid-item:nth-of-type(7n)': {
        borderRight: 'none'
    },

    '& .MuiGrid-item:nth-of-type(-n+7)': {
        borderTop: 'none'
    }
}));

export const CustomThisMonthTypo = styled(Typography)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const CustomSelectedTypo = styled(CustomThisMonthTypo)(({ theme }) => ({
    top: '15px',
    left: '13px',
    width: '32px',
    height: '32px',
    textAlign: 'center',
    lineHeight: '30px',
    color: '#fff',
    background: theme.palette.primary.main,
    borderRadius: '50%'
}));

export const CustomTodayTypo = styled(CustomThisMonthTypo)(({ theme }) => ({
    top: '15px',
    left: '13px',
    width: '32px',
    height: '32px',
    textAlign: 'center',
    lineHeight: '30px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '50%'
}));

export const CustomTabBox = styled(Box)`
    position: absolute;
    top: -70px;
`;

export const CustomTab = styled(Tab)`
    min-width: 70px;
`;

export const AuthBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '40px',
    paddingLeft: '40px',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.up('desktop')]: {
        display: 'none'
    }
}));

export const LogoBox = styled(Box)`
    position: absolute;
    left: 0;
    width: 40px;
`;

export const ModalBox = styled(Box)(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.background.default,
    padding: '20px',
    '&:focus-visible': {
        outline: 'none!important'
    }
}));

export const CustomTextField = styled(TextField)`
    & .MuiInputBase-root {
        height: 40px;
    }
`;

export const TodoCircleBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '22px',
    left: '48px',

    svg: {
        width: '15px',
        height: '15px',
        color: theme.palette.primary.main
    }
}));

export const ScheduleBox = styled(Box)`
    padding: 45px 20px 20px 20px;
`;
