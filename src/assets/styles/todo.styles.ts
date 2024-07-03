import { Box, FormControl, Typography, styled } from '@mui/material';

export const TodoWrapper = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
`;
export const TodoTitle = styled(Typography)`
    position: absolute;
    top: 20px;
    font-weight: bold;
    text-align: center;
`;

export const TodoDateWrapper = styled(Box)`
    position: relative;
    display: flex;
    justify-content: center;
`;

export const TodoFormControl = styled(FormControl)`
    width: 100%;
`;
