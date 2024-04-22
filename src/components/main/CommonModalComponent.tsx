import { ReactNode } from 'react';
import { ModalProvider } from '../../context/ModalContext';
import { CommonButtonComponent } from './modal/CommonButtonComponent';
import { CommonBoxComponent } from './modal/CommonBoxComponent';

export const CommonModalComponent = ({ str, modalEn }: { str: string; modalEn: ReactNode }) => {
    return (
        <ModalProvider>
            <CommonButtonComponent str={str} />
            <CommonBoxComponent>{modalEn}</CommonBoxComponent>
        </ModalProvider>
    );
};
