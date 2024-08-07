import React, { useState } from 'react';
import { Box, FormControl, FormGroup, Grid, Stack, TextField, Typography, List, ListItem } from '@mui/material';
import { CommonFormControl, DateButton, DateModal } from '../../assets/styles/common.styles';
import { CustomClock, CustomFormControl, GroupButton, GroupModalBox } from '../../assets/styles/aside.styles';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import dayjs from 'dayjs';
import { useModal } from '../../hooks/useModal';
import { useRecoilValue } from 'recoil';
import { groupList } from '../../recoil/groupList';
import { selectedDate } from '../../recoil/selectedDate';
import CircleIcon from '@mui/icons-material/Circle';
import { useMutation } from '@tanstack/react-query';
import { saveScheduleData } from '../../services/scheduleService';

export const AddScheduleComponent = () => {
    const selectDate = useRecoilValue(selectedDate);
    const [stDate, setStDate] = useState<string>(selectDate);
    const [enDate, setEnDate] = useState<string>(selectDate);
    const group = useRecoilValue(groupList);
    const [groupIdx, setGroupIdx] = useState<number>(NaN);
    const [title, setTitle] = useState<string>('');
    const [memo, setMemo] = useState<string>('');

    const { ref: stCalendarRef, buttonRef: stCalendarBtnRef, isOpen: stCalendarOpen, handleToggle: stCalendarHandleToggle } = useModal();

    const { ref: stTimeRef, buttonRef: stTimeBtnRef, isOpen: stTimeOpen, handleToggle: stTimeHandleToggle } = useModal();

    const { ref: enCalendarRef, buttonRef: enCalendarBtnRef, isOpen: enCalendarOpen, handleToggle: enCalendarHandleToggle } = useModal();

    const { ref: enTimeRef, buttonRef: enTimeBtnRef, isOpen: enTimeOpen, handleToggle: enTimeHandleToggle } = useModal();

    const { ref: groupRef, buttonRef: groupBtnRef, isOpen: groupOpen, handleToggle: groupHandleToggle } = useModal();

    const { mutate: mutateScheduleData } = useMutation({
        mutationFn: () =>
            saveScheduleData({
                title,
                memo,
                stDate,
                enDate,
                groupId: group[groupIdx].id,
            }),
        onSuccess: (data) => {
            if (data.status === 200) {
                alert('저장되었습니다.');
            }
        },
    });

    const handleOnSubmit = async () => {
        handleValidate();
        mutateScheduleData();
    };

    const handleValidate = () => {
        if (title === '') {
            alert('제목을 입력해주세요');
            return false;
        }

        if (memo === '') {
            alert('메모를 입력해주세요');
            return false;
        }

        if (Number.isNaN(groupIdx)) {
            alert('카테고리를 선택해주세요');
            return false;
        }

        if (dayjs(stDate) > dayjs(enDate)) {
            alert('날짜를 확인해주세요.');
            return false;
        }
    };

    return (
        <Grid container direction="column" justifyContent="space-between" height="100%">
            <FormGroup>
                <CommonFormControl>
                    <TextField fullWidth placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                </CommonFormControl>
                <CommonFormControl>
                    <TextField fullWidth placeholder="메모" value={memo} onChange={(e) => setMemo(e.target.value)} />
                </CommonFormControl>
                <CustomFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">일정 선택</Typography>
                        <Box>
                            <GroupButton onClick={groupHandleToggle} ref={groupBtnRef}>
                                {Number.isNaN(groupIdx) ? (
                                    '카테고리 선택'
                                ) : (
                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CircleIcon
                                            sx={{
                                                width: '15px',
                                                marginRight: '5px',
                                                color: group[groupIdx].color,
                                            }}
                                        />
                                        {group[groupIdx].title}
                                    </Typography>
                                )}
                            </GroupButton>
                            <GroupModalBox ref={groupRef}>
                                {groupOpen && (
                                    <List onClick={groupHandleToggle}>
                                        {group.map((data, idx) => (
                                            <ListItem key={idx} onClick={() => setGroupIdx(idx)} sx={{ cursor: 'pointer' }}>
                                                <CircleIcon
                                                    sx={{
                                                        width: '15px',
                                                        marginRight: '5px',
                                                        color: data.color,
                                                    }}
                                                />
                                                {data.title}
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </GroupModalBox>
                        </Box>
                    </Box>
                </CustomFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">시작일</Typography>
                        <Stack direction="row" spacing={1}>
                            <Box>
                                <DateButton onClick={stCalendarHandleToggle} ref={stCalendarBtnRef}>
                                    {dayjs(stDate).format('YYYY-MM-DD')}
                                </DateButton>
                                <DateModal boxShadow={3} ref={stCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stCalendarOpen && (
                                            <DateCalendar
                                                value={dayjs(stDate)}
                                                onChange={(date) => setStDate(dayjs(date).format('YYYY-MM-DD HH:mm:ss'))}
                                            />
                                        )}
                                    </LocalizationProvider>
                                </DateModal>
                            </Box>
                            <Box>
                                <DateButton onClick={stTimeHandleToggle} ref={stTimeBtnRef}>
                                    {dayjs(stDate).format('HH:mm')}
                                </DateButton>
                                <DateModal boxShadow={3} ref={stTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {stTimeOpen && (
                                            <CustomClock
                                                value={dayjs(stDate)}
                                                onChange={(time) => setStDate(dayjs(time).format('YYYY-MM-DD HH:mm:ss'))}
                                            />
                                        )}
                                    </LocalizationProvider>
                                </DateModal>
                            </Box>
                        </Stack>
                    </Box>
                </CommonFormControl>
                <CommonFormControl>
                    <Box className="spaceBetween">
                        <Typography variant="body1">종료일</Typography>
                        <Stack direction="row" spacing={1}>
                            <Box>
                                <DateButton onClick={enCalendarHandleToggle} ref={enCalendarBtnRef}>
                                    {dayjs(enDate).format('YYYY-MM-DD')}
                                </DateButton>
                                <DateModal boxShadow={3} ref={enCalendarRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enCalendarOpen && (
                                            <DateCalendar
                                                value={dayjs(enDate)}
                                                minDate={dayjs(stDate)}
                                                onChange={(date) => setEnDate(dayjs(date).format('YYYY-MM-DD HH:mm:ss'))}
                                            />
                                        )}
                                    </LocalizationProvider>
                                </DateModal>
                            </Box>
                            <Box>
                                <DateButton onClick={enTimeHandleToggle} ref={enTimeBtnRef}>
                                    {dayjs(enDate).format('HH:mm')}
                                </DateButton>
                                <DateModal boxShadow={3} ref={enTimeRef}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        {enTimeOpen && (
                                            <CustomClock
                                                value={dayjs(enDate)}
                                                onChange={(time) => setEnDate(dayjs(time).format('YYYY-MM-DD HH:mm:ss'))}
                                            />
                                        )}
                                    </LocalizationProvider>
                                </DateModal>
                            </Box>
                        </Stack>
                    </Box>
                </CommonFormControl>
            </FormGroup>
            <FormControl>
                <ButtonComponent str="추가" onClick={handleOnSubmit} />
            </FormControl>
        </Grid>
    );
};
