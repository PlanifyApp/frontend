import { Button, FormControl, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { CommonFormControl } from '../../assets/styles/common.styles';
import { Box } from '@mui/system';
import { CustomDateModal } from '../../assets/styles/aside.styles';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { useModal } from '../../hooks/useModal';

export const AddTodoComponent = () => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();

    return (
        <Grid container direction="column" justifyContent="space-between" height="100%">
            <FormGroup>
                <CommonFormControl>
                    <TextField fullWidth placeholder="메모" />
                </CommonFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">날짜</Typography>
                        <Box>
                            <Button value="2024.4.22" ref={buttonRef} onClick={handleToggle}>
                                2024.04.22
                            </Button>
                            <CustomDateModal boxShadow={3} ref={ref}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    {isOpen && <DateCalendar />}
                                </LocalizationProvider>
                            </CustomDateModal>
                        </Box>
                    </Box>
                </CommonFormControl>
            </FormGroup>
            <FormControl>
                <ButtonComponent str="추가" />
            </FormControl>
        </Grid>
    );
};
