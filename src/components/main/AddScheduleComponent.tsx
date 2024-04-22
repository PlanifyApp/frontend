import {
    Box,
    Button,
    Chip,
    FormControl,
    FormGroup,
    Grid,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { CommonFormControl } from '../../assets/styles/common.styles';
import { ChipIcon, CustomClock, CustomDateModal } from '../../assets/styles/aside.styles';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useModal } from '../../hooks/useModal';

export const AddScheduleComponent = () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

    const {
        ref: stCalendarRef,
        buttonRef: stCalendarBtnRef,
        isOpen: stCalendarOpen,
        handleToggle: stCalendarHandleToggle
    } = useModal();

    const {
        ref: stTimeRef,
        buttonRef: stTimeBtnRef,
        isOpen: stTimeOpen,
        handleToggle: stTimeHandleToggle
    } = useModal();

    const {
        ref: enCalendarRef,
        buttonRef: enCalendarBtnRef,
        isOpen: enCalendarOpen,
        handleToggle: enCalendarHandleToggle
    } = useModal();

    const {
        ref: enTimeRef,
        buttonRef: enTimeBtnRef,
        isOpen: enTimeOpen,
        handleToggle: enTimeHandleToggle
    } = useModal();

    return (
        <Grid container direction="column" justifyContent="space-between" height="100%">
            <FormGroup>
                <CommonFormControl>
                    <TextField fullWidth placeholder="제목" />
                </CommonFormControl>
                <CommonFormControl>
                    <TextField fullWidth placeholder="메모" />
                </CommonFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">일정 선택</Typography>
                        <Chip
                            label="운동"
                            icon={
                                <ChipIcon
                                    style={{
                                        backgroundColor: '#673AB7'
                                    }}
                                />
                            }
                        />
                    </Box>
                </CommonFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">시작일</Typography>
                        <Stack direction="row">
                            <Box>
                                <Button
                                    value="2024.4.22"
                                    onClick={stCalendarHandleToggle}
                                    ref={stCalendarBtnRef}
                                >
                                    2024.04.22
                                </Button>
                                <CustomDateModal boxShadow={3} ref={stCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stCalendarOpen && <DateCalendar value={value} />}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                            <Box>
                                <Button
                                    value="08:00"
                                    onClick={stTimeHandleToggle}
                                    ref={stTimeBtnRef}
                                >
                                    08:00
                                </Button>
                                <CustomDateModal boxShadow={3} ref={stTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stTimeOpen && <CustomClock value={value} />}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                        </Stack>
                    </Box>
                </CommonFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">종료일</Typography>
                        <Stack direction="row">
                            <Box>
                                <Button
                                    value="2024.4.22"
                                    onClick={enCalendarHandleToggle}
                                    ref={enCalendarBtnRef}
                                >
                                    2024.04.22
                                </Button>
                                <CustomDateModal boxShadow={3} ref={enCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enCalendarOpen && <DateCalendar value={value} />}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                            <Box>
                                <Button
                                    value="08:00"
                                    onClick={enTimeHandleToggle}
                                    ref={enTimeBtnRef}
                                >
                                    08:00
                                </Button>
                                <CustomDateModal boxShadow={3} ref={enTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enTimeOpen && <CustomClock value={value} />}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                        </Stack>
                    </Box>
                </CommonFormControl>
            </FormGroup>
            <FormControl>
                <ButtonComponent str="추가" />
            </FormControl>
        </Grid>
    );
};
