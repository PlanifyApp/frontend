import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import logo from '../assets/imgs/logo.png';
import { Box, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
    CustomButton,
    CustomDatePicker,
    CustomList,
    CustomListItem,
    CustomListItemText
} from '../assets/styles/aside.styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CheckBox } from '@mui/icons-material';

export const Aside = () => {
    return (
        <>
            <Grid container columns={16} spacing={1} alignItems="center">
                <Grid laptop={2}>
                    <img src={logo} alt="logo" width="100%" />
                </Grid>
                <Grid laptop="auto">
                    <Typography variant="body1" fontWeight="bold">
                        로그인 / 회원가입
                    </Typography>
                </Grid>
            </Grid>
            <Grid container columns={16} spacing={2} paddingTop="10px">
                <Grid laptop={8}>
                    <CustomButton>
                        <Typography variant="body1" fontWeight="bold">
                            회원가입
                        </Typography>
                    </CustomButton>
                </Grid>
                <Grid laptop={8}>
                    <CustomButton>
                        <Typography variant="body1" fontWeight="bold">
                            로그인
                        </Typography>
                    </CustomButton>
                </Grid>
            </Grid>
            <Box py="30px">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CustomDatePicker views={['month', 'day']} />
                </LocalizationProvider>
            </Box>
            <Box py="25px" borderTop={1} borderColor="secondary.main">
                <Typography variant="h5">todo List</Typography>
                <CustomList>
                    <CustomListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckBox />
                            </ListItemIcon>
                            <CustomListItemText primary="testasdfasdfasdfasdfasdfasdfdfasdfasdfaasdgsdfgfdagasdgasgsdsd" />
                        </ListItemButton>
                    </CustomListItem>
                    <CustomListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckBox />
                            </ListItemIcon>
                            <CustomListItemText primary="test" />
                        </ListItemButton>
                    </CustomListItem>
                </CustomList>
            </Box>
        </>
    );
};
