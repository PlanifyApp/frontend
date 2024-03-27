import React from 'react';
import './App.css';
import {
    Box,
    Container,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ThemeProvider,
    Typography,
    createTheme
} from '@mui/material';
import logo from './assets/imgs/logo.png';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { CheckBox } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';
import { CustomDatePicker } from './aside.styles';

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
            fontSize: '1.3rem',
            '@media (min-width: 1024px)': {
                fontSize: '1.65rem'
            },
            '@media (max-width: 1023px)': {
                fontSize: '2.55rem'
            }
        },
        h4: {
            fontSize: '1.2rem',
            '@media (min-width: 1024px)': {
                fontSize: '1.55rem'
            },
            '@media (max-width: 1023px)': {
                fontSize: '2.4rem'
            }
        },
        h5: {
            fontSize: '1.1rem',
            '@media (min-width: 1024px)': {
                fontSize: '1.3rem'
            },
            '@media (max-width: 1023px)': {
                fontSize: '2.2rem'
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
                <Grid container>
                    <Grid laptop={3} py={2}>
                        <Grid
                            container
                            columns={16}
                            spacing={1}
                            alignItems="center"
                        >
                            <Grid laptop={2}>
                                <img src={logo} alt="logo" width="100%" />
                            </Grid>
                            <Grid laptop="auto">
                                <Typography variant="body1">
                                    로그인 / 회원가입
                                </Typography>
                            </Grid>
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CustomDatePicker views={['month', 'day']} />
                        </LocalizationProvider>
                        <Box>
                            <Typography variant="h5">todo List</Typography>
                            <List>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CheckBox />
                                        </ListItemIcon>
                                        <ListItemText primary="test" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid laptop="auto">111111111111</Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
