import { PositionFixedCenter, theme } from '../assets/styles/common.styles';
import { CircularProgress } from '@mui/material';

export const Loading = () => {
    return (
        <PositionFixedCenter>
            <CircularProgress style={{ color: theme.palette.primary.main }} />
        </PositionFixedCenter>
    );
};
