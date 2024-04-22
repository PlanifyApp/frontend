import React, { ReactNode, useContext } from 'react';
import { ModalContext, ModalContextType } from '../../../context/ModalContext';
import { CustomGroupPaper } from '../../../assets/styles/aside.styles';
import { CommonModal } from '../../../assets/styles/common.styles';

export const CommonBoxComponent = ({ children }: { children: ReactNode }) => {
    const { isOpen, ref } = useContext<ModalContextType>(ModalContext);

    return (
        <CommonModal open={isOpen}>
            <CustomGroupPaper ref={ref}>{children}</CustomGroupPaper>
        </CommonModal>
    );
};
