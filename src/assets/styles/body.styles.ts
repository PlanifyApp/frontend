import { Input } from '@mui/base';
import { Box, Grid, styled } from '@mui/material';

export const CustomTextFieldBox = styled(Box)`
    position: absolute;
    right: 0;
`;

export const CustomCalendarBox = styled(Box)`
    height: 100%;
    padding-top: 150px;
`;

export const CustomCalendarContBox = styled(Box)`
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
`;

export const CustomGridTit = styled(Grid)`
    position: absolute;
    top: -70px;
`;

export const CustomGridCont = styled(Grid)`
    & .MuiGrid-item {
        background: #fff;
    }
`;
