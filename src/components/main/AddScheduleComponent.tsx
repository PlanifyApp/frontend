import {
    Box,
    Button,
    Chip,
    FormControl,
    FormGroup,
    Grid,
    Stack,
    TextField,
    Typography,
    Menu,
    MenuItem
} from '@mui/material';
import { CommonFormControl } from '../../assets/styles/common.styles';
import {
    ChipIcon,
    CustomButton,
    CustomClock,
    CustomDateButton,
    CustomDateModal,
    CustomFormControl
} from '../../assets/styles/aside.styles';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { MouseEvent, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useModal } from '../../hooks/useModal';
import { currentDateInfo } from '../../utils/date';
import { useRecoilValue } from 'recoil';
import { groupList } from '../../recoil/groupList';
import { selectedDate } from '../../recoil/selectedDate';
import CircleIcon from '@mui/icons-material/Circle';

const { min, date } = currentDateInfo;
const minute = Math.floor(min);
const newDate = date.setMinutes(minute);

export const AddScheduleComponent = () => {
    const selectDate = useRecoilValue(selectedDate);
    const [stDate, setStDate] = useState<string>(selectDate);
    const [enDate, setEnDate] = useState<string>(selectDate);
    const group = useRecoilValue(groupList);

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

    const {
        ref: groupRef,
        buttonRef: groupBtnRef,
        isOpen: groupOpen,
        handleToggle: groupHandleToggle
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
                        <Box>
                            <CustomButton
                                value={stDate}
                                onClick={groupHandleToggle}
                                ref={groupBtnRef}
                            >
                                {stDate}
                            </CustomButton>
                            <CustomDateModal ref={groupRef}>
                                {groupOpen && (
                                    <Menu open={groupOpen}>
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                    </Menu>
                                )}
                            </CustomDateModal>
                        </Box>
                    </Box>
                </CustomFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">시작일</Typography>
                        <Stack direction="row" spacing={1}>
                            <Box>
                                <CustomDateButton
                                    value={stDate}
                                    onClick={stCalendarHandleToggle}
                                    ref={stCalendarBtnRef}
                                >
                                    {stDate}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={stCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stCalendarOpen && (
                                            <DateCalendar
                                                value={dayjs(stDate)}
                                                onChange={(date) =>
                                                    setStDate(dayjs(date).format('YYYY-MM-DD'))
                                                }
                                            />
                                        )}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                            <Box>
                                <CustomDateButton
                                    value={dayjs(stDate).format('HH:mm')}
                                    onClick={stTimeHandleToggle}
                                    ref={stTimeBtnRef}
                                >
                                    {dayjs(stDate).format('HH:mm')}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={stTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stTimeOpen && (
                                            <CustomClock
                                                value={dayjs(stDate)}
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
                        <Stack direction="row" spacing={1}>
                            <Box>
                                <CustomDateButton
                                    value={enDate}
                                    onClick={enCalendarHandleToggle}
                                    ref={enCalendarBtnRef}
                                >
                                    {enDate}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={enCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enCalendarOpen && (
                                            <DateCalendar
                                                value={dayjs(enDate)}
                                                onChange={(date) => setEnDate(date)}
                                            />
                                        )}
                                    </LocalizationProvider>
                                </CustomDateModal>
                            </Box>
                            <Box>
                                <CustomDateButton
                                    value={dayjs(enDate).format('HH:mm')}
                                    onClick={enTimeHandleToggle}
                                    ref={enTimeBtnRef}
                                >
                                    {dayjs(enDate).format('HH:mm')}
                                </CustomDateButton>
                                <CustomDateModal boxShadow={3} ref={enTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enTimeOpen && (
                                            <CustomClock
                                                value={dayjs(enDate)}
                                                onChange={(time) =>
                                                    setEnDate(dayjs(time).format('YYYY.MM.DD'))
                                                }
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
