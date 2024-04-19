import React, { forwardRef } from 'react';
import { CustomButton } from '../../assets/styles/aside.styles';
import { Typography } from '@mui/material';

type ComponentProps = {
    str: string;
    onClick?: () => void;
};

export const ButtonComponent = forwardRef<HTMLButtonElement, ComponentProps>((props, ref) => {
    const { str, onClick } = props;

    return (
        <CustomButton onClick={onClick} ref={ref}>
            <Typography variant="body1" fontWeight="bold">
                {str}
            </Typography>
        </CustomButton>
    );
});
