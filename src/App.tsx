import React from 'react';
import './App.css';
import {
    Box,
    Container,
    CssBaseline,
    Grid,
    ThemeProvider,
    Typography,
    createTheme
} from '@mui/material';
import logo from './assets/logo.png';
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

const theme = createTheme({
    palette: {
        background: {
            default: '#F6F6E9'
        },
        primary: {
            main: '#457D58'
        }
    },
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        fontSize: 16,
        h3: {
            fontSize: '1.2rem',
            '@media (min-width: 1024px)': {
                fontSize: '1.5rem'
            },
            '@media (max-width: 1023px)': {
                fontSize: '2.4rem'
            }
        },
        body1: {
            fontSize: '1rem',
            '@media (min-width: 1024px)': {
                fontSize: '1rem'
            },
            '@media (max-width: 1023px)': {
                fontSize: '2rem'
            }
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1900
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="desktop">
                <Grid container width="100%">
                    <Grid item desktop={3}>
                        <Typography variant="h1">
                            <img src={logo} alt="logo" />
                        </Typography>
                        <Typography variant="body1">
                            로그인 / 회원가입
                        </Typography>
                    </Grid>
                    <Grid item desktop={9}></Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
