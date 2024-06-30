import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/system';
import { Grid, IconButton, InputAdornment, Modal, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CalendarComponent } from './body/CalendarComponent';
import {
    CustomCalendarBox,
    CustomTextField,
    CustomTopBox,
    ModalBox
} from '../assets/styles/body.styles';
import logo from '../assets/imgs/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Aside } from './Aside';
import { ListComponent } from './aside/ListComponent';
import { ScrollBox, theme } from '../assets/styles/common.styles';
import { useRecoilState } from 'recoil';
import { selectedDate } from '../recoil/selectedDate';

export const Body = () => {
    const isShow = useMediaQuery(theme.breakpoints.down('laptop'));
    const [open, setOpen] = useState(false);
    const [date, setDate] = useRecoilState(selectedDate);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleOnClick = (val: string) => {
        setDate(val);
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
                        <Box
                            sx={{
                                display: { mobile: 'block', desktop: 'none' }
                            }}
                        >
                            <MenuIcon onClick={handleOpen} sx={{ cursor: 'pointer' }} />
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
                    <CalendarComponent handleOnClick={handleOnClick} />
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
