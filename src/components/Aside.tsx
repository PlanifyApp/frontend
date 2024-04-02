import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import logo from '../assets/imgs/logo.png';
import { Box, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CustomDatePicker, useIconStyle } from '../assets/styles/aside.styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { FormControl } from '@mui/base';
import { ListComponent } from './aside/ListComponent';
import { ModalComponent } from './aside/ModalComponent';
import { ButtonComponent } from './aside/ButtonComponent';
import 'react-color-palette/css';
import { CirclePicker } from 'react-color';

export const Aside = () => {
    const [color, setColor] = useState('#fff');
    const [open, setOpen] = useState(false);

    const handleColor = (colorCode: string) => {
        setColor(colorCode);
    };

    return (
        <>
            <Box height="95%">
                <Grid container columns={16} spacing={1}>
                    <Grid desktop={2}>
                        <img src={logo} alt="logo" width="100%" />
                    </Grid>
                    <Grid desktop="auto">
                        <Typography variant="body1" fontWeight="bold">
                            로그인 / 회원가입
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container columns={16} spacing={2} paddingTop="10px">
                    <Grid desktop={8}>
                        <ButtonComponent str="회원가입" />
                    </Grid>
                    <Grid desktop={8}>
                        <ButtonComponent str="로그인" />
                    </Grid>
                </Grid>
                <Box py="30px">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <CustomDatePicker views={['month', 'day']} />
                    </LocalizationProvider>
                </Box>
                <Box py="25px" borderTop={1} borderColor="secondary.main">
                    <Typography variant="h5">todo List</Typography>
                    <ListComponent />
                </Box>
            </Box>
            <Grid container alignItems="flex-end" height="5%">
                <ModalComponent
                    btnEl={<PlaylistAddCheckIcon {...useIconStyle} />}
                    modalEn={
                        <List>
                            <ListItem>
                                <ListItemText primary="운동" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="업무" />
                            </ListItem>
                        </List>
                    }
                />
                <ModalComponent
                    btnEl={<PlaylistAddIcon {...useIconStyle} />}
                    modalEn={
                        <form>
                            <Typography variant="h5">Add Group</Typography>
                            <FormControl style={{ margin: '10px 0' }}>
                                <TextField fullWidth placeholder="그룹명을 입력해주세요." />
                            </FormControl>
                            <FormControl>
                                <TextField fullWidth value={color} />
                            </FormControl>
                            <FormControl style={{ margin: '10px 0' }}>
                                <CirclePicker
                                    width="100%"
                                    onChange={(data) => handleColor(data.hex)}
                                    circleSize={30}
                                    circleSpacing={16}
                                />
                            </FormControl>
                            <FormControl>
                                <ButtonComponent str="추가" />
                            </FormControl>
                        </form>
                    }
                />
            </Grid>
        </>
    );
};
