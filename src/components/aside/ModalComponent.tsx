import React, { ReactNode } from 'react';
import { ModalProvider } from '../../context/ModalContext';
import { ModalButtonComponent } from './modal/ModalButtonComponent';
import { ModalBoxComponent } from './modal/ModalBoxComponent';

export const ModalComponent = ({ btnEl, modalEn }: { btnEl: ReactNode; modalEn: ReactNode }) => {
    return (
        <ModalProvider>
            <ModalButtonComponent>{btnEl}</ModalButtonComponent>
            <ModalBoxComponent>{modalEn}</ModalBoxComponent>
        </ModalProvider>
    );
};
