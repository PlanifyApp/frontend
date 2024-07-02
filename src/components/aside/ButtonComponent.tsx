import React, { forwardRef } from 'react';
import { CommonButton } from '../../assets/styles/common.styles';
import { Typography } from '@mui/material';

type ComponentProps = {
    str: string;
    onClick?: () => void;
};

export const ButtonComponent = forwardRef<HTMLButtonElement, ComponentProps>((props, ref) => {
    const { str, onClick } = props;

    return (
        <CommonButton onClick={onClick} ref={ref}>
            <Typography variant="body1" fontWeight="bold">
                {str}
            </Typography>
        </CommonButton>
    );
});
