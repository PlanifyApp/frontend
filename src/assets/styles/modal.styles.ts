import { Box, Modal, Paper, styled } from '@mui/material';

// common
export const ModalInnerWrapper = styled(Paper)`
    position: absolute;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
`;

// export const ModalInnerWrapper = styled(Box)`
//     position: absolute;
//     background-color: #fff;
//     border-radius: 15px;
//     padding: 20px;
// `;

export const MiddleModalWrapper = styled(Modal)`
    & .MuiPaper-root {
        position: fixed;
        width: 100%;
        height: 100%;
    }
`;

export const FlexibleModalWrapper = styled(Box)`
    position: absolute;
    width: 100%;
    z-index: 999;
`;

export const AuthMiddleModalInnerWrapper = styled(ModalInnerWrapper)(({ theme }) => ({
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    [theme.breakpoints.up('laptop')]: {
        maxWidth: '500px',
        maxHeight: '500px'
    }
}));

export const GroupFlexibleModalWrapper = styled(FlexibleModalWrapper)(`
    bottom: 30px;
    max-height: 30vh;
`);
