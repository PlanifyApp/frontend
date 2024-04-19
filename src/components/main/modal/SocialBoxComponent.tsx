import React, { ReactNode, useContext } from 'react';
import { ModalContext, ModalContextType } from '../../../context/ModalContext';
import { AuthModal, CustomGroupPaper } from '../../../assets/styles/aside.styles';

export const SocialBoxComponent = ({ children }: { children: ReactNode }) => {
    const { open, modalRef } = useContext<ModalContextType>(ModalContext);

    return (
        <AuthModal open={open}>
            <CustomGroupPaper ref={modalRef}>{children}</CustomGroupPaper>
        </AuthModal>
    );
};
