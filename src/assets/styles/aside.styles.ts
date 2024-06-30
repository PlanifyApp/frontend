import { Box, Button, Grid, List, ListItem, ListItemText, TextField, styled } from '@mui/material';
import { DateCalendar, MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { CommonFormControl } from './common.styles';

export const AuthWrapper = styled(Box)`
    position: relative;
    height: 40px;
    padding-left: 40px;
    align-items: center;
    display: flex;
`;

export const GroupModalWrapper = styled(Grid)`
    position: relative;
`;

export const LogoWrap = styled(Box)`
    position: absolute;
    left: 0;
    width: 40px;
`;

export const DatePicker = styled(DateCalendar)`
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

//
export const CustomList = styled(List)`
    padding: 0;
`;

export const CustomListItem = styled(ListItem)`
    padding: 0;
    margin-top: 15px;

    &:first-of-type {
        margin-top: 0;
    }

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

export const useIconStyle = {
    sx: {
        color: 'rgba(0, 0, 0, 0.54)',
        width: '30px',
        height: 'auto',
        marginRight: '10px',
        cursor: 'pointer',
        transition: 'color .3s',
        '&:hover': {
            color: 'rgba(0, 0, 0, 0.8)' // 원하는 hover 스타일을 추가합니다.
        }
    }
};

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

export const ChipIcon = styled(Box)`
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;

export const CustomClock = styled(MultiSectionDigitalClock)`
    & .MuiList-root {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    ,
    & .MuiButtonBase-root {
        border-radius: 20px;
    }
`;

export const CustomFormControl = styled(CommonFormControl)`
    margin-top: 30px;
`;

export const CloseBtnWrap = styled(Box)`
    display: flex;
    flex-direction: row-reverse;
`;

export const closeBtn = {
    sx: {
        color: 'rgba(0, 0, 0, 0.54)',
        cursor: 'pointer'
    }
};

export const GroupModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: '43px',
    zIndex: '999',
    background: '#fff',
    borderRadius: '15px',
    boxShadow: theme.shadows[2]
}));

export const GroupButton = styled(Button)`
    color: #333;
    &:hover {
        background: none;
    }
`;
