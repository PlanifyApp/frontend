import {
    Box,
    ButtonBase,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    styled
} from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

export const CustomDatePicker = styled(DateCalendar)`
    width: 100% !important;
    padding: 0 5%;
    border-radius: 15px;
    background-color: #fff;
    height: 300px;
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

export const CustomColorTestField = styled(TextField)`
    & .MuiInputBase-input::after {
        display: inline-block;
        content: '';
        width: 10px;
        height: 10px;
        background: #ccc;
    }
`;

export const CustomColorBox = styled(Box)`
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 15px;

    .circle-picker {
        justify-content: center;
        margin: 0 !important;

        > span > div {
            margin: 0 !important;
            padding: 5px;
        }
    }
`;

export const TestBox = styled(Box)(({ theme }) => ({
    '&::-webkit-scrollbar': {
        backgroundColor: theme.palette.background.default,
        width: '7px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '5px',
        borderRadius: '16px',
        transition: 'all .3s'
        // border: '5px solid #fff'
    },
    '&:hover': {
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#a0a0a5'
        }
    }
}));
