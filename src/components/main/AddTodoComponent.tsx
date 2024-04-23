import {
    Button,
    FormControl,
    FormGroup,
    Grid,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    TextField,
    Typography
} from '@mui/material';
import { CommonFormControl } from '../../assets/styles/common.styles';
import { Box } from '@mui/system';
import {
    CustomDateButton,
    CustomDateModal,
    CustomFormControl
} from '../../assets/styles/aside.styles';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { useModal } from '../../hooks/useModal';
import { useState } from 'react';
import { currentDateInfo } from '../../utils/date';
import dayjs, { Dayjs } from 'dayjs';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const AddTodoComponent = () => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();
    const [date, setDate] = useState<Dayjs>(dayjs(currentDateInfo.date));

    return (
        <Box>
            <CommonFormControl>
                <TextField
                    fullWidth
                    placeholder="메모"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AddIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </CommonFormControl>
            <CustomFormControl>
                <Box className="spaceBetween">
                    <Typography variant="body1">날짜</Typography>
                    <Box>
                        <CustomDateButton
                            value={date.format('YYYY.MM.DD')}
                            ref={buttonRef}
                            onClick={handleToggle}
                        >
                            {date.format('YYYY.MM.DD')}
                        </CustomDateButton>
                        <CustomDateModal boxShadow={3} ref={ref}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                {isOpen && <DateCalendar onChange={(date) => setDate(date)} />}
                            </LocalizationProvider>
                        </CustomDateModal>
                    </Box>
                </Box>
            </CustomFormControl>
            <List>
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <RemoveIcon />
                        </IconButton>
                    }
                >
                    운동
                </ListItem>
            </List>
        </Box>
    );
};
