import { Box, Modal } from '@mui/material';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export const Social = () => {
    const { open, modalRef } = useContext(ModalContext);

    return (
        <Modal open={open} ref={modalRef}>
            <Box>test</Box>
        </Modal>
    );
};
