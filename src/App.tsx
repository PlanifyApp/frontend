import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { RootWrapper, RootInnerWrapper, theme } from './assets/styles/common.styles';
import { RecoilRoot } from 'recoil';
import { Main } from './pages/Main';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
    const queryClient = new QueryClient();
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
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container maxWidth="desktop" disableGutters>
                        <RootWrapper>
                            <RootInnerWrapper height={{ laptop: height, mobile: '100%' }}>
                                <Main />
                            </RootInnerWrapper>
                        </RootWrapper>
                    </Container>
                </ThemeProvider>
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
