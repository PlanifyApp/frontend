import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/system';
import { Grid, IconButton, InputAdornment, Modal, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CalendarComponent } from './body/CalendarComponent';
import {
    BodyContainer,
    BodyGridWrapper,
    BodyTextField,
    CalendarBoxWrapper,
    MenuWrapper,
    ModalWrapper
} from '../assets/styles/body.styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Aside } from './Aside';
import { ListComponent } from './aside/ListComponent';
import { ScrollWrapper, theme } from '../assets/styles/common.styles';
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
            <BodyContainer>
                <BodyGridWrapper container columns={12}>
                    <Grid item laptop={9} mobile={8}>
                        <MenuWrapper>
                            <MenuIcon onClick={handleOpen} sx={{ cursor: 'pointer' }} />
                        </MenuWrapper>
                    </Grid>
                    <Grid item laptop={3} mobile={4}>
                        <BodyTextField
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
                </BodyGridWrapper>
                <CalendarBoxWrapper>
                    <CalendarComponent handleOnClick={handleOnClick} />
                </CalendarBoxWrapper>
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
                            <ScrollWrapper height="calc(100% - 55px)">
                                <ListComponent />
                            </ScrollWrapper>
                        </Box>
                    </Box>
                )}
            </BodyContainer>
            <Modal open={open} onClose={handleClose} sx={{ justifyContent: 'flex-start' }}>
                <ModalWrapper>
                    <Aside />
                </ModalWrapper>
            </Modal>
        </>
    );
};
