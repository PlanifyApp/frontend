import {
    Box,
    Chip,
    FormControl,
    FormGroup,
    Grid,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { CommonFormControl } from '../../assets/styles/common.styles';
import {
    ChipIcon,
    CustomClock,
    CustomDateButton,
    CustomDateModal,
    CustomFormControl
} from '../../assets/styles/aside.styles';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useModal } from '../../hooks/useModal';
import { currentDateInfo } from '../../utils/date';

const { min, date } = currentDateInfo;
const minute = Math.floor(min);
const newDate = date.setMinutes(minute);

export const AddScheduleComponent = () => {
    const [stDate, setStDate] = useState<Dayjs>(dayjs(newDate));
    const [enDate, setEnDate] = useState<Dayjs>(dayjs(newDate));

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
                <CustomFormControl>
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
                </CustomFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">시작일</Typography>
                        <Stack direction="row">
                            <Box>
                                <CustomDateButton
                                    value={stDate.format('YYYY.MM.DD')}
                                    onClick={stCalendarHandleToggle}
                                    ref={stCalendarBtnRef}
                                >
                                    {stDate.format('YYYY.MM.DD')}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={stCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stCalendarOpen && (
                                            <DateCalendar
                                                value={stDate}
                                                onChange={(date) => setStDate(date)}
                                            />
                                        )}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                            <Box>
                                <CustomDateButton
                                    value={stDate.format('HH:mm')}
                                    onClick={stTimeHandleToggle}
                                    ref={stTimeBtnRef}
                                >
                                    {stDate.format('HH:mm')}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={stTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stTimeOpen && (
                                            <CustomClock
                                                value={stDate}
                                                onChange={(time) => setStDate(time)}
                                            />
                                        )}
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
                                <CustomDateButton
                                    value={enDate.format('YYYY.MM.DD')}
                                    onClick={enCalendarHandleToggle}
                                    ref={enCalendarBtnRef}
                                >
                                    {enDate.format('YYYY.MM.DD')}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={enCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enCalendarOpen && (
                                            <DateCalendar
                                                value={enDate}
                                                onChange={(date) => setEnDate(date)}
                                            />
                                        )}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                            <Box>
                                <CustomDateButton
                                    value={enDate.format('HH:mm')}
                                    onClick={enTimeHandleToggle}
                                    ref={enTimeBtnRef}
                                >
                                    {enDate.format('HH:mm')}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={enTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enTimeOpen && (
                                            <CustomClock
                                                value={enDate}
                                                onChange={(time) => setEnDate(time)}
                                            />
                                        )}
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
