import React, { ReactNode, useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { ButtonComponent } from '../../aside/ButtonComponent';
import { Box } from '@mui/material';

export const CommonButtonComponent = ({ btn }: { btn: ReactNode }) => {
    const { handleToggle, buttonRef } = useContext(ModalContext);

    return (
        <Box onClick={handleToggle} ref={buttonRef}>
            {btn}
        </Box>
    );
};
