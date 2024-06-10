import React, { ReactNode, useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { Box } from '@mui/material';

export const CommonButtonComponent = ({ btn }: { btn: ReactNode }) => {
    const { handleToggle, buttonRef } = useContext(ModalContext);

    return (
        <Box onClick={handleToggle} ref={buttonRef}>
            {btn}
        </Box>
    );
};
