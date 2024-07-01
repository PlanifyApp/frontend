import { Box, Grid, Tab, TextField, styled } from '@mui/material';

export const CustomTopBox = styled(Grid)`
    position: absolute;
    left: 0;
`;

export const CustomCalendarBox = styled(Box)`
    height: 100%;
    padding-top: 6em;
`;

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
