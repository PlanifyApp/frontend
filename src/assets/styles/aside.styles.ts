import { Box, ButtonBase, List, ListItem, ListItemText, Paper, styled } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

export const CustomDatePicker = styled(DateCalendar)`
    width: 100% !important;
    padding: 0 5%;
    border-radius: 15px;
    background-color: #fff;
    ,
    & .MuiPickersCalendarHeader-root {
        padding: 0;
    }
    ,
    & .MuiDayCalendar-header {
        justify-content: space-between;
    }
    & .MuiDayCalendar-weekContainer {
        justify-content: space-between;
    }
`;

export const CustomList = styled(List)`
    padding: 0;
`;

export const CustomListItem = styled(ListItem)`
    padding: 0;
    margin-top: 15px;

    & .MuiButtonBase-root {
        padding: 0;

        &:hover {
            background: none;
        }
    }
`;

export const CustomListItemText = styled(ListItemText)`
    & .MuiTypography-root {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export const CustomButton = styled(ButtonBase)(({ theme }) => ({
    width: '100%',
    padding: '15px 0',
    borderRadius: '15px',
    backgroundColor: theme.palette.primary.main,

    '& .MuiTypography-root': {
        color: '#fff'
    }
}));

export const useIconStyle = {
    sx: {
        color: 'rgba(0, 0, 0, 0.54)',
        width: '35px',
        height: 'auto',
        marginRight: '10px',
        cursor: 'pointer',
        transition: 'color .3s',
        '&:hover': {
            color: 'rgba(0, 0, 0, 0.8)' // 원하는 hover 스타일을 추가합니다.
        }
    }
};

export const CustomGroupBox = styled(Box)`
    position: absolute;
    bottom: 30px;
    width: 100%;
    max-height: 30vh;
    padding-right: 40px;
    z-index: 999;
`;

export const CustomGroupPaper = styled(Paper)`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
`;
