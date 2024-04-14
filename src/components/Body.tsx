import React from 'react';
import { Box } from '@mui/system';
import { CommonTextField } from '../assets/styles/common.styles';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CalendarComponent } from './body/CalendarComponent';
import { CustomCalendarBox, CustomTextFieldBox } from '../assets/styles/body.styles';
import { ButtonComponent } from './aside/ButtonComponent';

export const Body = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            position="relative"
        >
            <CustomTextFieldBox container columns={12}>
                <Grid item mobile={2}>
                    <Grid
                        container
                        columns={2}
                        spacing={2}
                        sx={{ display: { mobile: 'flex', desktop: 'none' } }}
                    >
                        <Grid item mobile={1}>
                            <ButtonComponent str="회원가입" />
                        </Grid>
                        <Grid item mobile={1}>
                            <ButtonComponent str="로그인" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item mobile={8} />
                <Grid item mobile={2}>
                    <CommonTextField
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
            </CustomTextFieldBox>
            <CustomCalendarBox>
                <CalendarComponent />
            </CustomCalendarBox>
        </Box>
    );
};
