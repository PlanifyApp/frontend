import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import logo from '../assets/imgs/logo.png';
import { Box, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
    CustomColorBox,
    CustomColorTestField,
    CustomDatePicker,
    useIconStyle,
    AuthBox,
    LogoBox
} from '../assets/styles/aside.styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { FormControl } from '@mui/base';
import { ListComponent } from './aside/ListComponent';
import { ModalComponent } from './aside/ModalComponent';
import { ButtonComponent } from './aside/ButtonComponent';
import 'react-color-palette/css';
import { CirclePicker } from 'react-color';
import { ScrollBox } from '../assets/styles/common.styles';
import { SocialModalComponent } from './main/SocialModalComponent';

export const Aside = () => {
    const [listHeight, setListHeight] = useState<number>(0);
    const [color, setColor] = useState('#fff');

    const handleColor = (colorCode: string) => {
        setColor(colorCode);
    };

    const getHeight = () => {
        const height = document.querySelector('.asideBox')?.clientHeight;
        if (height) setListHeight(height - 40 - 360 - 75);
    };
    useEffect(() => {
        getHeight();

        window.addEventListener('resize', getHeight);

        return () => {
            window.removeEventListener('resize', getHeight);
        };
    }, []);

    return (
        <>
            <Box height="calc(100% - 40px)" className="asideBox">
                <AuthBox>
                    <LogoBox>
                        <img src={logo} alt="logo" width="100%" />
                    </LogoBox>
                    <Typography variant="body1" fontWeight="bold">
                        로그인 / 회원가입
                    </Typography>
                </AuthBox>
                <Grid container columns={16} spacing={2} paddingTop="10px">
                    <Grid mobile={8}>
                        <SocialModalComponent str="일정추가" modalEn={<Box>ddddddddddddddd</Box>} />
                        {/* <ButtonComponent str="일정 추가" /> */}
                    </Grid>
                    <Grid mobile={8}>
                        <ButtonComponent str="todo 추가" />
                    </Grid>
                </Grid>
                <Box py="30px">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <CustomDatePicker views={['month', 'day']} />
                    </LocalizationProvider>
                </Box>
                <Box
                    pt="25px"
                    borderTop={1}
                    borderColor="secondary.main"
                    height={listHeight}
                    overflow="hidden"
                >
                    <Typography variant="h5" height="30px">
                        todo List
                    </Typography>
                    <ScrollBox height={'calc(100% - 30px)'} sx={{ overflowY: 'auto' }}>
                        <ListComponent />
                    </ScrollBox>
                </Box>
            </Box>
            <Grid container alignItems="flex-end" height="40px">
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
                                <CustomColorTestField fullWidth value={color} />
                            </FormControl>
                            <FormControl style={{ margin: '3px 0 10px 0' }}>
                                <CustomColorBox>
                                    <CirclePicker
                                        width="100%"
                                        onChange={(data) => handleColor(data.hex)}
                                        circleSize={40}
                                    />
                                </CustomColorBox>
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
