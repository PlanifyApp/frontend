import React from 'react';
import { CustomButton } from '../../assets/styles/aside.styles';
import { Typography } from '@mui/material';

export const ButtonComponent = ({ str }: { str: string }) => {
    return (
        <CustomButton>
            <Typography variant="body1" fontWeight="bold">
                {str}
            </Typography>
        </CustomButton>
    );
};
