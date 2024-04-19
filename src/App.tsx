import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Aside } from './components/Aside';
import {
    AsideContainer,
    BodyContainer,
    CommonBox,
    CommonInnerBox,
    theme
} from './assets/styles/common.styles';
import { Body } from './components/Body';
import { ModalProvider } from './context/ModalContext';
import { Social } from './components/Social';

function App() {
    const isShow = useMediaQuery(theme.breakpoints.up('desktop'));
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
                    <CommonInnerBox height={{ laptop: height, mobile: '100%' }}>
                        <Grid container columns={12} height="100%">
                            {isShow && (
                                <Grid desktop={3}>
                                    <AsideContainer>
                                        <Aside />
                                    </AsideContainer>
                                </Grid>
                            )}
                            <Grid mobile={12} desktop={9} height="100%">
                                <BodyContainer>
                                    <Body />
                                </BodyContainer>
                            </Grid>
                        </Grid>
                    </CommonInnerBox>
                </CommonBox>
            </Container>
            <ModalProvider>
                <Social />
            </ModalProvider>
        </ThemeProvider>
    );
}

export default App;
