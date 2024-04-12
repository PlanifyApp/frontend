import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Aside } from './components/Aside';
import { CommonBox, CommonInnerBox, theme } from './assets/styles/common.styles';
import { Body } from './components/Body';

function App() {
    const [height, setHeight] = useState<number>(1600);

    const getHeight = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1600) {
            setHeight(Math.floor(1600 / 12) * 9);
        } else {
            setHeight(Math.floor(windowWidth / 12) * 9);
        }
    };

    useEffect(() => {
        getHeight();

        window.addEventListener('resize', getHeight);

        return () => {
            window.removeEventListener('resize', getHeight);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="desktop" disableGutters>
                <CommonBox>
                    <CommonInnerBox
                        height={{ laptop: height, mobile: '100%' }}
                        boxShadow={{ laptop: 2, mobile: 0 }}
                    >
                        <Grid container height="100%">
                            <Grid
                                desktop={3}
                                p="20px"
                                position="relative"
                                sx={{ display: { mobile: 'none', desktop: 'block' } }}
                            >
                                <Aside />
                            </Grid>
                            <Grid mobile={12} desktop={9}>
                                <Box
                                    borderLeft={{
                                        desktop: `1px solid ${theme.palette.secondary.main}`,
                                        mobile: 'none'
                                    }}
                                    p="20px"
                                    height="100%"
                                >
                                    <Body />
                                </Box>
                            </Grid>
                        </Grid>
                    </CommonInnerBox>
                </CommonBox>
            </Container>
        </ThemeProvider>
    );
}

export default App;
