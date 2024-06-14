import { Box, FormControl, Grid, Modal, createTheme, styled } from '@mui/material';

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
        },
        text: {
            primary: '#333'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1600
        }
    },
    typography: {
        fontFamily: 'Nanum Gothic, sans-serif',
        fontSize: 16,
        h1: {
            fontSize: '1.4rem'
        },
        h2: {
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
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    '& .MuiInputBase-root': {
                        borderRadius: '15px',
                        background: '#fff'
                    }
                }
            }
        }
    }
});

theme.typography = {
    ...theme.typography,
    h3: {
        fontSize: '1.2rem',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '1.1rem'
        }
    },
    body1: {
        fontSize: '1.rem',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '.9rem'
        }
    }
};

export const AsideContainer = styled(Box)`
    padding: 20px;
    position: relative;
    height: 100%;
`;

export const BodyContainer = styled(Box)(({ theme }) => ({
    padding: '20px',
    height: '100%',
    [theme.breakpoints.up('desktop')]: {
        borderLeft: `1px solid ${theme.palette.secondary.main}`
    }
}));

export const CommonBox = styled(Box)`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const CommonInnerBox = styled(Box)(({ theme }) => ({
    width: '100%',
    borderRadius: '15px',
    maxHeight: '100%',
    [theme.breakpoints.up('laptop')]: {
        maxHeight: '90%',
        boxShadow: theme.shadows[2]
    }
}));

export const ScrollBox = styled(Box)(({ theme }) => ({
    '&::-webkit-scrollbar': {
        backgroundColor: theme.palette.background.default,
        width: '7px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '5px',
        borderRadius: '16px',
        transition: 'all .3s'
    },
    '&:hover': {
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#a0a0a5'
        }
    }
}));

export const CommonFormControl = styled(FormControl)`
    width: 100%;
    margin-bottom: 10px;

    .spaceBetween {
        position: relative;
        display: flex;
        justify-content: space-between;
    }
`;

export const CommonModal = styled(Modal)(({ theme }) => ({
    '& .MuiPaper-root': {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        [theme.breakpoints.up('laptop')]: {
            maxWidth: '500px',
            maxHeight: '500px'
        }
    }
}));

export const CommonModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute'
}));
