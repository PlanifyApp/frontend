import { Grow } from '@mui/material';
import React, { ReactNode, useContext } from 'react';
import { ModalContext, ModalContextType } from '../../../context/ModalContext';
import { CustomGroupBox, CustomGroupPaper } from '../../../assets/styles/aside.styles';

export const ModalBoxComponent = ({ children }: { children: ReactNode }) => {
    const { isOpen, ref } = useContext<ModalContextType>(ModalContext);

    return (
        <Grow in={isOpen} ref={ref}>
            <CustomGroupBox>
                <CustomGroupPaper>{children}</CustomGroupPaper>
            </CustomGroupBox>
        </Grow>
    );
};
