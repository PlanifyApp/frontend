import React, { SyntheticEvent, useRef, useState } from 'react';
import { Box } from '@mui/system';
import {
    Backdrop,
    Grid,
    IconButton,
    InputAdornment,
    Modal,
    TextField,
    Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CalendarComponent } from './body/CalendarComponent';
import { AuthBox, CustomCalendarBox, CustomTopBox, LogoBox } from '../assets/styles/body.styles';
import logo from '../assets/imgs/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Aside } from './Aside';

export const Body = () => {
    const backdropRef = useRef();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
                position="relative"
            >
                <CustomTopBox container columns={12}>
                    <Grid item laptop={9} mobile={8}>
                        {/* <AuthBox>
                            <LogoBox>
                                <img src={logo} alt="logo" width="100%" />
                            </LogoBox>
                            <Typography variant="body1" fontWeight="bold">
                                로그인 / 회원가입
                            </Typography>
                        </AuthBox> */}
                        <Box sx={{ display: { mobile: 'block', desktop: 'none' } }}>
                            <MenuIcon onClick={handleOpen} />
                        </Box>
                    </Grid>
                    <Grid item laptop={3} mobile={4}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </CustomTopBox>
                <CustomCalendarBox>
                    <CalendarComponent />
                </CustomCalendarBox>
            </Box>
            <Modal open={open} onClose={handleClose} sx={{ justifyContent: 'flex-start' }}>
                <Box
                    bgcolor="background.default"
                    height="100%"
                    width={{ mobile: '100%', tablet: '500px' }}
                    padding="20px"
                >
                    <Aside />
                </Box>
            </Modal>
        </>
    );
};
