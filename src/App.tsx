import React from 'react';
import './App.css';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Aside } from './components/Aside';
import { theme } from './assets/styles/common.styles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="desktop">
                <Grid container>
                    <Grid
                        laptop={3}
                        p="20px"
                        height="100vh"
                        position="relative"
                    >
                        <Aside />
                    </Grid>
                    <Grid laptop="auto" p="20px" maxHeight="100vh">
                        <Box
                            borderLeft={1}
                            borderColor="secondary.main"
                            minHeight="100%"
                            p="20px"
                        >
                            111111111111
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
