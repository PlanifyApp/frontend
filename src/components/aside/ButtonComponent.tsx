import React from 'react';
import { CommonButton } from '../../assets/styles/common.styles';
import { Typography } from '@mui/material';

type ComponentProps = {
    str: string;
    onClick?: () => void;
};

export const ButtonComponent = (props: ComponentProps) => {
    const { str, onClick } = props;

    return (
        <CommonButton onClick={onClick}>
            <Typography variant="body1" fontWeight="bold">
                {str}
            </Typography>
        </CommonButton>
    );
};
