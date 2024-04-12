import { Box, Container, Grid, TextField, createTheme, styled } from '@mui/material';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

export const theme = createTheme({
    palette: {
        background: {
            default: '#F6F6E9'
        },
        primary: {
            main: '#457D58'
        },
        secondary: {
            main: '#E1E1C3'
        }
    },
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        fontSize: 16,
        h3: {
            fontSize: '1.3rem'
        },
        h4: {
            fontSize: '1.2rem'
        },
        h5: {
            fontSize: '1.1rem'
        },
        body1: {
            fontSize: '1rem'
        },
        body2: {
            fontSize: '.8rem'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1600
        }
    }
});

export const CommonBox = styled(Box)`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const CommonInnerBox = styled(Box)`
    width: 100%;
    border-radius: 15px;
`;

export const CommonTextField = styled(TextField)`
    & .MuiInputBase-root {
        border-radius: 15px;
        background: #fff;
    }
`;
