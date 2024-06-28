import { ReactNode } from 'react';
import { ButtonBase, Grow } from '@mui/material';
import { useModal } from '../../hooks/useModal';
import { GroupFlexibleModalWrapper, ModalInnerWrapper } from '../../assets/styles/modal.styles';

export const GroupModalComponent = ({
    btnEl,
    modalEn
}: {
    btnEl: ReactNode;
    modalEn: ReactNode;
}) => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();

    return (
        <>
            <ButtonBase disableRipple onClick={handleToggle} ref={buttonRef}>
                {btnEl}
            </ButtonBase>
            <Grow in={isOpen} ref={ref}>
                <GroupFlexibleModalWrapper>
                    <ModalInnerWrapper>{modalEn}</ModalInnerWrapper>
                </GroupFlexibleModalWrapper>
            </Grow>
        </>
    );
};
