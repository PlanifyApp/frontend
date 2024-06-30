import { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import logo from '../assets/imgs/logo.png';
import { Box, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
    useIconStyle,
    AuthWrapper,
    LogoWrap,
    GroupModalWrapper,
    DatePicker
} from '../assets/styles/aside.styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { ListComponent } from './aside/ListComponent';
import { GroupModalComponent } from './modal/GroupModalComponent';
import { ButtonComponent } from './aside/ButtonComponent';
import 'react-color-palette/css';
import { ScrollBox } from '../assets/styles/common.styles';
import { MiddleModalComponent } from './modal/MiddleModalComponent';
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
                <AuthWrapper>
                    <LogoWrap>
                        <img src={logo} alt="logo" width="100%" />
                    </LogoWrap>
                    <Box>
                        {user.id ? (
                            <Typography variant="body1" fontWeight="bold">
                                {user.email || user.nickname || user.name}
                            </Typography>
                        ) : (
                            <MiddleModalComponent
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
                </AuthWrapper>
                <Grid container columns={16} spacing={2} paddingTop="10px">
                    <Grid mobile={8}>
                        <MiddleModalComponent
                            btn={<ButtonComponent str="일정추가" />}
                            modalEn={user.id ? <AddScheduleComponent /> : <Social />}
                        />
                    </Grid>
                    <Grid mobile={8}>
                        <MiddleModalComponent
                            btn={<ButtonComponent str="todo 추가" />}
                            modalEn={user.id ? <AddTodoComponent /> : <Social />}
                        />
                    </Grid>
                </Grid>
                <Box py="30px">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker views={['month', 'day']} />
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
            <GroupModalWrapper container alignItems="flex-end">
                <GroupModalComponent
                    btnEl={<DragIndicatorOutlinedIcon {...useIconStyle} />}
                    modalEn={<GroupListComponent />}
                />
                <GroupModalComponent
                    btnEl={<ControlPointOutlinedIcon {...useIconStyle} />}
                    modalEn={<GroupFormComponent />}
                />
            </GroupModalWrapper>
        </>
    );
};
