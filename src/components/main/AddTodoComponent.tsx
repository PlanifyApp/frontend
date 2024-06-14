import { TextField } from '@mui/material';
import {
    CustomDateBox,
    CustomDateButton,
    CustomDateModal,
    CustomTodoBox,
    CustomTodoFormControl,
    CustomTodoTitle
} from '../../assets/styles/aside.styles';
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
                // handleModalToggle && handleModalToggle();
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
        <CustomTodoBox>
            <CustomTodoTitle variant="h4">todo 추가</CustomTodoTitle>
            <FormControl>
                <CustomDateBox>
                    <CustomDateButton
                        disableRipple
                        value={date}
                        ref={buttonRef}
                        onClick={handleToggle}
                    >
                        {date}
                    </CustomDateButton>
                    <CustomDateModal boxShadow={3} ref={ref}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {isOpen && (
                                <DateCalendar
                                    onChange={(date) => setDate(dayjs(date).format('YYYY-MM-DD'))}
                                />
                            )}
                        </LocalizationProvider>
                    </CustomDateModal>
                </CustomDateBox>
            </FormControl>
            <CustomTodoFormControl>
                <TextField
                    fullWidth
                    placeholder="메모"
                    sx={{ margin: '15px 0' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeydown}
                    value={value}
                />
            </CustomTodoFormControl>
            <CustomTodoFormControl>
                <ButtonComponent
                    str="추가"
                    onClick={() => handleAlert('추가하시겠습니까?', handleOnSubmit)}
                />
            </CustomTodoFormControl>
        </CustomTodoBox>
    );
};
