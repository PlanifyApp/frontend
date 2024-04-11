import { Input } from '@mui/base';
import { Box, Grid, styled } from '@mui/material';

export const CustomBox = styled(Box)`
    border-radius: 15px;
    overflow: hidden;
`;

export const CustomGridTit = styled(Grid)`
    margin-bottom: 15px;
`;

export const CustomGridCont = styled(Grid)`
    & .MuiGrid-item {
        background: #fff;
    }
`;
