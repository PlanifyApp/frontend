import { ReactNode } from 'react';
import { useModal } from '../../hooks/useModal';
import { Box } from '@mui/material';
import { MiddleModalInnerWrapper, MiddleModalWrapper } from '../../assets/styles/modal.styles';

export const MiddleModalComponent = ({ btn, modalEn }: { btn: ReactNode; modalEn: ReactNode }) => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();

    return (
        <>
            <Box onClick={handleToggle} ref={buttonRef}>
                {btn}
            </Box>
            <MiddleModalWrapper open={isOpen}>
                <MiddleModalInnerWrapper ref={ref}>{modalEn}</MiddleModalInnerWrapper>
            </MiddleModalWrapper>
        </>
    );
};
