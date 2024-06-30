import { TextField } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useModal } from '../../hooks/useModal';
import { KeyboardEvent, useState } from 'react';
import dayjs from 'dayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { FormControl } from '@mui/base';
import { api } from '../../apis/baseApi';
import { todoList } from '../../recoil/todoList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDate } from '../../recoil/selectedDate';
import {
    TodoDateWrapper,
    TodoFormControl,
    TodoTitle,
    TodoWrapper
} from '../../assets/styles/todo.styles';
import { DateButton, DateModal } from '../../assets/styles/common.styles';

export const AddTodoComponent = () => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();
    const selectDate = useRecoilValue(selectedDate);
    const [value, setValue] = useState<string>('');
    const [date, setDate] = useState(selectDate);
    const [, setTodoData] = useRecoilState(todoList);

    const handleAlert = (msg: string, fn: () => void) => {
        const ans = confirm(msg);

        if (ans) fn();
        else return;
    };

    const getTodoList = async () => {
        try {
            const { data } = await api.get('/todo/list', {
                params: {
                    date: dayjs(date).format('YYYY-MM-DD')
                }
            });

            if (data.status === 200) {
                setTodoData(data.dataList);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleKeydown = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAlert('추가하시겠습니까?', handleOnSubmit);
        }
    };

    const handleOnSubmit = async () => {
        handleValidate();

        try {
            const { data } = await api.post('/todo/store', {
                title: value,
                date: date
            });

            if (data.status === 200) {
                setValue('');

                if (selectDate === date) {
                    getTodoList();
                }
            }
        } catch (error) {
            console.log(error);
        }
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
                            {isOpen && (
                                <DateCalendar
                                    onChange={(date) => setDate(dayjs(date).format('YYYY-MM-DD'))}
                                />
                            )}
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
                <ButtonComponent
                    str="추가"
                    onClick={() => handleAlert('추가하시겠습니까?', handleOnSubmit)}
                />
            </TodoFormControl>
        </TodoWrapper>
    );
};
