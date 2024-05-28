import { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import logo from '../assets/imgs/logo.png';
import { Box, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CustomDatePicker, useIconStyle, AuthBox, LogoBox } from '../assets/styles/aside.styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { ListComponent } from './aside/ListComponent';
import { ModalComponent } from './aside/ModalComponent';
import { ButtonComponent } from './aside/ButtonComponent';
import 'react-color-palette/css';
import { ScrollBox } from '../assets/styles/common.styles';
import { CommonModalComponent } from './main/CommonModalComponent';
import { AddScheduleComponent } from './main/AddScheduleComponent';
import { AddTodoComponent } from './main/AddTodoComponent';
import { Social } from './Social';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/userState';
import { UserData } from '../type/userType';
import { GroupListComponent } from './main/GroupListComponent';
import { GroupFormComponent } from './main/GroupFormComponent';

export const Aside = () => {
    const user: UserData = useRecoilValue(userState);
    const timeRef = useRef<NodeJS.Timeout>();
    const [listHeight, setListHeight] = useState<number>(0);
    const getHeight = () => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            const height = document.querySelector('.asideBox')?.clientHeight;
            if (height) setListHeight(height - 40 - 360 - 75);
        }, 500);
    };

    useEffect(() => {
        getHeight();

        window.addEventListener('resize', getHeight);

        return () => {
            window.removeEventListener('resize', getHeight);
            clearTimeout(timeRef.current);
        };
    }, []);

    return (
        <>
            <Box height="calc(100% - 40px)" className="asideBox">
                <AuthBox>
                    <LogoBox>
                        <img src={logo} alt="logo" width="100%" />
                    </LogoBox>
                    <Box>
                        {user.id ? (
                            <Typography variant="body1" fontWeight="bold">
                                {user.email || user.nickname || user.name}
                            </Typography>
                        ) : (
                            <CommonModalComponent
                                btn={
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        로그인 / 회원가입
                                    </Typography>
                                }
                                modalEn={<Social />}
                            />
                        )}
                    </Box>
                </AuthBox>
                <Grid container columns={16} spacing={2} paddingTop="10px">
                    {user.id ? (
                        <>
                            <Grid mobile={8}>
                                <CommonModalComponent
                                    btn={<ButtonComponent str="일정추가" />}
                                    modalEn={<AddScheduleComponent />}
                                />
                            </Grid>
                            <Grid mobile={8}>
                                <CommonModalComponent
                                    btn={<ButtonComponent str="todo 추가" />}
                                    modalEn={<AddTodoComponent />}
                                />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid mobile={8}>
                                <CommonModalComponent
                                    btn={<ButtonComponent str="일정추가" />}
                                    modalEn={<Social />}
                                />
                            </Grid>
                            <Grid mobile={8}>
                                <CommonModalComponent
                                    btn={<ButtonComponent str="todo 추가" />}
                                    modalEn={<Social />}
                                />
                            </Grid>
                        </>
                    )}
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
                    <Typography variant="h5" height="30px" marginBottom="15px">
                        todo List
                    </Typography>
                    <ScrollBox height={'calc(100% - 30px)'} sx={{ overflowY: 'auto' }}>
                        <ListComponent />
                    </ScrollBox>
                </Box>
            </Box>
            <Grid container alignItems="flex-end" height="40px">
                <ModalComponent
                    btnEl={<DragIndicatorOutlinedIcon {...useIconStyle} />}
                    modalEn={<GroupListComponent />}
                />
                <ModalComponent
                    btnEl={<ControlPointOutlinedIcon {...useIconStyle} />}
                    modalEn={<GroupFormComponent />}
                />
            </Grid>
        </>
    );
};
