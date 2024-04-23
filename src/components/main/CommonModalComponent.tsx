import { ReactNode } from 'react';
import { ModalProvider } from '../../context/ModalContext';
import { CommonButtonComponent } from './modal/CommonButtonComponent';
import { CommonBoxComponent } from './modal/CommonBoxComponent';

export const CommonModalComponent = ({ btn, modalEn }: { btn: ReactNode; modalEn: ReactNode }) => {
    return (
        <ModalProvider>
            <CommonButtonComponent btn={btn} />
            <CommonBoxComponent>{modalEn}</CommonBoxComponent>
        </ModalProvider>
    );
};
