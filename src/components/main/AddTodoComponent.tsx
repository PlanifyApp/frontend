import React, { KeyboardEvent, useState } from 'react';
import { TextField } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useModal } from '../../hooks/useModal';
import dayjs from 'dayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { FormControl } from '@mui/base';
import { todoList } from '../../recoil/todoList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDate } from '../../recoil/selectedDate';
import { TodoDateWrapper, TodoFormControl, TodoTitle, TodoWrapper } from '../../assets/styles/todo.styles';
import { DateButton, DateModal } from '../../assets/styles/common.styles';
import { useMutation } from '@tanstack/react-query';
import { getTodoList, saveTodoData } from '../../services/todoService';

export const AddTodoComponent = () => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();
    const selectDate = useRecoilValue(selectedDate);
    const [value, setValue] = useState<string>('');
    const [date, setDate] = useState(selectDate);
    const [, setTodoData] = useRecoilState(todoList);

    const { mutate: mutateTodoList } = useMutation({
        mutationFn: (date: string) => getTodoList(date),
        onSuccess: (data) => {
            if (data.status === 200) {
                setTodoData(data.dataList);
            }
        },
    });

    const { mutate: mutateTodoData } = useMutation({
        mutationFn: () => saveTodoData({ title: value, date }),
        onSuccess: (data) => {
            if (data.status === 200) {
                setValue('');

                if (selectDate === date) {
                    const formattedDate = dayjs(date).format('YYYY-MM-DD');
                    mutateTodoList(formattedDate);
                }
            }
        },
    });

    const handleAlert = (msg: string, fn: () => void) => {
        const ans = confirm(msg);

        if (ans) fn();
        else return;
    };

    const handleKeydown = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAlert('추가하시겠습니까?', handleOnSubmit);
        }
    };

    const handleOnSubmit = async () => {
        handleValidate();
        mutateTodoData();
    };

    const handleValidate = () => {
        if (value === '') {
            alert('내용을 입력해주세요');
            return;
        }
    };

    return (
        <TodoWrapper>
            <TodoTitle variant="h4">todo 추가</TodoTitle>
            <FormControl>
                <TodoDateWrapper>
                    <DateButton disableRipple value={date} ref={buttonRef} onClick={handleToggle}>
                        {date}
                    </DateButton>
                    <DateModal boxShadow={3} ref={ref}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {isOpen && <DateCalendar onChange={(date) => setDate(dayjs(date).format('YYYY-MM-DD'))} />}
                        </LocalizationProvider>
                    </DateModal>
                </TodoDateWrapper>
            </FormControl>
            <TodoFormControl>
                <TextField
                    fullWidth
                    placeholder="메모"
                    sx={{ margin: '15px 0' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeydown}
                    value={value}
                />
            </TodoFormControl>
            <TodoFormControl>
                <ButtonComponent str="추가" onClick={() => handleAlert('추가하시겠습니까?', handleOnSubmit)} />
            </TodoFormControl>
        </TodoWrapper>
    );
};
