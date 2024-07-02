import { Box, Grid, TextField, styled } from '@mui/material';

export const BodyContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
`;

export const BodyGridWrapper = styled(Grid)`
    position: absolute;
    left: 0;
`;

export const BodyTextField = styled(TextField)`
    & .MuiInputBase-root {
        height: 40px;
    }
`;

export const CalendarBoxWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    paddingTop: '6em',
    [theme.breakpoints.between('mobile', 'laptop')]: {
        width: '50%'
    }
}));

export const ModalWrapper = styled(Box)(({ theme }) => ({
    width: '500px',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    padding: '20px',
    '&:focus-visible': {
        outline: 'none!important'
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {
        width: '100%'
    }
}));

export const MenuWrapper = styled(Box)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.between('mobile', 'desktop')]: {
        display: 'block'
    }
}));
