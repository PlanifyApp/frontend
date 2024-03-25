import React, { ReactNode, useContext } from 'react';
import { ModalContext, ModalContextType } from '../../../context/ModalContext';
import { ButtonBase } from '@mui/material';

export const ModalButtonComponent = ({ children }: { children: ReactNode }) => {
    const { toggleClick, buttonRef } = useContext<ModalContextType>(ModalContext);

    return (
        <ButtonBase disableRipple onClick={toggleClick} ref={buttonRef}>
            {children}
        </ButtonBase>
    );
};
