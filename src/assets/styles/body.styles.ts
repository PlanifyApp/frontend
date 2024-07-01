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

export const CalendarBoxWrapper = styled(Box)`
    height: 100%;
    padding-top: 6em;
`;

export const ModalWrapper = styled(Box)(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.background.default,
    padding: '20px',
    '&:focus-visible': {
        outline: 'none!important'
    }
}));
