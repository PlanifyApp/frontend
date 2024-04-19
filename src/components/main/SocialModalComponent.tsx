import { ReactNode } from 'react';
import { ModalProvider } from '../../context/ModalContext';
import { SocialButtonComponent } from './modal/SocialButtonComponent';
import { SocialBoxComponent } from './modal/SocialBoxComponent';

export const SocialModalComponent = ({ str, modalEn }: { str: string; modalEn: ReactNode }) => {
    return (
        <ModalProvider>
            <SocialButtonComponent str={str} />
            <SocialBoxComponent>{modalEn}</SocialBoxComponent>
        </ModalProvider>
    );
};
