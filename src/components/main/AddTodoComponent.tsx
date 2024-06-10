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
import { useContext, useState } from 'react';
import { currentDateInfo } from '../../utils/date';
import dayjs, { Dayjs } from 'dayjs';
import { ButtonComponent } from '../aside/ButtonComponent';
import { FormControl } from '@mui/base';
import { api } from '../../apis/baseApi';
import { ModalContext, ModalContextType } from '../../context/ModalContext';
import { todoList } from '../../recoil/todoList';
import { useRecoilState } from 'recoil';

export const AddTodoComponent = () => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();
    const { handleToggle: handleModalToggle } = useContext<ModalContextType>(ModalContext);
    const [value, setValue] = useState<string>('');
    const [date, setDate] = useState<Dayjs>(dayjs(currentDateInfo.date));
    const [todoData, setTodoData] = useRecoilState(todoList);

    const handleOnSubmit = async () => {
        try {
            const { data } = await api.post('/todo/store', {
                title: value,
                date: date.format('YYYY-MM-DD')
            });

            if (data.status === 200) {
                setValue('');
                handleModalToggle && handleModalToggle();
                // todo 업데이트
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CustomTodoBox>
            <CustomTodoTitle variant="h4">todo 추가</CustomTodoTitle>
            <FormControl>
                <CustomDateBox>
                    <CustomDateButton
                        disableRipple
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
                </CustomDateBox>
            </FormControl>
            <CustomTodoFormControl>
                <TextField
                    fullWidth
                    placeholder="메모"
                    sx={{ margin: '15px 0' }}
                    onChange={(e) => setValue(e.target.value)}
                />
            </CustomTodoFormControl>
            <CustomTodoFormControl>
                <ButtonComponent str="추가" onClick={handleOnSubmit} />
            </CustomTodoFormControl>
        </CustomTodoBox>
    );
};
