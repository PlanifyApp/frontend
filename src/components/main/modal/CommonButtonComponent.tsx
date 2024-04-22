import React, { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { ButtonComponent } from '../../aside/ButtonComponent';

export const CommonButtonComponent = ({ str }: { str: string }) => {
    const { handleToggle, buttonRef } = useContext(ModalContext);

    return <ButtonComponent str={str} onClick={handleToggle} ref={buttonRef} />;
};
