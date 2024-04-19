import React, { ReactNode, useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { ButtonComponent } from '../../aside/ButtonComponent';

export const SocialButtonComponent = ({ str }: { str: string }) => {
    const { toggleClick, buttonRef } = useContext(ModalContext);

    return <ButtonComponent str={str} onClick={toggleClick} ref={buttonRef} />;
};
