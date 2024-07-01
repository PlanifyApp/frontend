import {
    Box,
    ButtonBase,
    FormControl,
    Button,
    createTheme,
    styled,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
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

export const RootWrapper = styled(Box)`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const RootInnerWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    borderRadius: '15px',
    maxHeight: '100%',
    [theme.breakpoints.up('laptop')]: {
        maxHeight: '90%',
        boxShadow: theme.shadows[2]
    }
}));

export const PositionFixedCenter = styled(Box)`
    position: fixed;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
`;

export const Wrapper = styled(Box)`
    padding: 20px;
    position: relative;
    height: 100%;
`;

export const AsideWrapper = styled(Wrapper)`
    padding-right: 0;
`;

export const BodyWrapper = styled(Wrapper)(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
        borderLeft: `1px solid ${theme.palette.secondary.main}`
    }
}));

// button
export const CommonButton = styled(ButtonBase)(({ theme }) => ({
    width: '100%',
    padding: '15px',
    borderRadius: '15px',
    backgroundColor: theme.palette.primary.main,

    '& .MuiTypography-root': {
        color: '#fff'
    }
}));

// form control
export const CommonFormControl = styled(FormControl)`
    width: 100%;
    margin-bottom: 10px;

    .spaceBetween {
        position: relative;
        display: flex;
        justify-content: space-between;
    }
`;

// date button
export const DateButton = styled(Button)`
    border-radius: 20px;
    padding: 5px 13px;
    background: #f0f0f0;
    color: #333;
`;

// date modal
export const DateModal = styled(Box)(({ theme }) => ({
    position: 'absolute',
    transform: 'translate(0, 100%)',
    bottom: '-5px',
    zIndex: 999,
    background: '#fff',
    borderRadius: '20px',
    boxShadow: theme.shadows[2]
}));

// common scroll design
export const ScrollWrapper = styled(Box)(({ theme }) => ({
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

//common list style
export const ListWrapper = styled(List)`
    padding: 0;
`;

export const ListItemWrapper = styled(ListItem)`
    padding: 0;
    margin-top: 15px;

    &:first-of-type {
        margin-top: 0;
    }

    & .MuiButtonBase-root {
        padding: 0;

        &:hover {
            background: none;
        }
    }
`;

export const ListItemInlineText = styled(ListItemText)`
    & .MuiTypography-root {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;
