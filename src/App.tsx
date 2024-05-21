import { useEffect, useState } from 'react';
import './App.css';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { CommonBox, CommonInnerBox, theme } from './assets/styles/common.styles';
import { RecoilRoot } from 'recoil';
import { Main } from './pages/Main';

// type userType = {};

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
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="desktop" disableGutters>
                    <CommonBox>
                        <CommonInnerBox height={{ laptop: height, mobile: '100%' }}>
                            <Main />
                        </CommonInnerBox>
                    </CommonBox>
                </Container>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
