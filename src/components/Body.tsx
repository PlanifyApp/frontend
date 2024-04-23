import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery } from '@mui/system';
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
import {
    AuthBox,
    CustomCalendarBox,
    CustomTextField,
    CustomTopBox,
    LogoBox,
    ModalBox
} from '../assets/styles/body.styles';
import logo from '../assets/imgs/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Aside } from './Aside';
import { ListComponent } from './aside/ListComponent';
import { ScrollBox, theme } from '../assets/styles/common.styles';

export const Body = () => {
    const isShow = useMediaQuery(theme.breakpoints.down('laptop'));
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
                        <CustomTextField
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
                <CustomCalendarBox height={{ laptop: '100%', mobile: '50%' }}>
                    <CalendarComponent />
                </CustomCalendarBox>
                {isShow && (
                    <Box height="50%" overflow="hidden" className="listBox">
                        <Box
                            mt="25px"
                            pt="25px"
                            borderTop={1}
                            borderColor="secondary.main"
                            height="100%"
                        >
                            <Typography variant="h5">todo List</Typography>
                            <ScrollBox sx={{ overflowY: 'auto' }} height="calc(100% - 55px)">
                                <ListComponent />
                            </ScrollBox>
                        </Box>
                    </Box>
                )}
            </Box>
            <Modal open={open} onClose={handleClose} sx={{ justifyContent: 'flex-start' }}>
                <ModalBox width={{ mobile: '100%', tablet: '500px' }}>
                    <Aside />
                </ModalBox>
            </Modal>
        </>
    );
};
