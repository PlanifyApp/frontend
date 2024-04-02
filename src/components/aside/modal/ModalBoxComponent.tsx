import { Grow } from '@mui/material';
import React, { ReactNode, useContext } from 'react';
import { ModalContext, ModalContextType } from '../../../context/ModalContext';
import { CustomGroupBox, CustomGroupPaper } from '../../../assets/styles/aside.styles';

export const ModalBoxComponent = ({ children }: { children: ReactNode }) => {
    const { open, modalRef } = useContext<ModalContextType>(ModalContext);

    return (
        <Grow in={open} ref={modalRef}>
            <CustomGroupBox>
                <CustomGroupPaper>{children}</CustomGroupPaper>
            </CustomGroupBox>
        </Grow>
    );
};
