import { Box, Grid, Tab, Typography, styled } from '@mui/material';

export const CustomTopBox = styled(Grid)`
    position: absolute;
    left: 0;
`;

export const CustomCalendarBox = styled(Box)`
    height: 100%;
    padding-top: 150px;
`;

export const CustomGridTit = styled(Grid)`
    position: absolute;
    top: -60px;
`;

export const CustomGridCont = styled(Grid)(({ theme }) => ({
    height: '40%',
    borderRadius: '15px',
    overflow: 'hidden',
    [theme.breakpoints.up('laptop')]: {
        height: '100%'
    },
    [theme.breakpoints.between('tablet', 'laptop')]: {
        height: '60%'
    },

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
    padding: 15px;
`;

export const CustomTabBox = styled(Box)`
    position: absolute;
    top: -70px;
`;

export const CustomTab = styled(Tab)`
    min-width: 70px;
`;

export const AuthBox = styled(Box)`
    position: relative;
    height: 40px;
    padding-left: 40px;
    align-items: center;
`;

export const LogoBox = styled(Box)`
    position: absolute;
    left: 0;
    width: 40px;
`;
