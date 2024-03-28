import { List, ListItem, styled } from '@mui/material';
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
