import { Container, Grid, TextField, createTheme, styled } from '@mui/material';

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
            desktop: 1600
        }
    }
});

export const CommonBox = styled(Grid)`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
`;

export const CommonTextField = styled(TextField)`
    & .MuiInputBase-root {
        border-radius: 15px;
        background: #fff;
    }
`;
