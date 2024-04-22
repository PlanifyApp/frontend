import { Box, Modal } from '@mui/material';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export const Social = () => {
    const { isOpen, ref } = useContext(ModalContext);

    return (
        <Modal open={isOpen} ref={ref}>
            <Box>test</Box>
        </Modal>
    );
};
