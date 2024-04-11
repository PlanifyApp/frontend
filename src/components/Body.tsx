import React from 'react';
import { Box } from '@mui/system';
import { CommonTextField } from '../assets/styles/common.styles';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CalendarComponent } from './body/CalendarComponent';
import { CustomCalendarBox, CustomTextFieldBox } from '../assets/styles/body.styles';

export const Body = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            position="relative"
        >
            <CustomTextFieldBox>
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
            </CustomTextFieldBox>
            <CustomCalendarBox>
                <CalendarComponent />
            </CustomCalendarBox>
        </Box>
    );
};
