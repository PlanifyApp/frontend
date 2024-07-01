import { ListItemButton, ListItemIcon } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoList } from '../../recoil/todoList';
import { selectedDate } from '../../recoil/selectedDate';
import { useMutation } from '@tanstack/react-query';
import { getTodoList, updateTodoState } from '../../services/todoService';
import { useEffect } from 'react';
import {
    ListItemInlineText,
    ListItemWrapper,
    ListWrapper
} from '../../assets/styles/common.styles';

export const ListComponent = () => {
    const date = useRecoilValue(selectedDate);
    const [todoData, setTodoData] = useRecoilState(todoList);

    const { mutate: mutateTodoList } = useMutation({
        mutationFn: (date: string) => getTodoList(date),
        onSuccess: (data) => {
            if (data.status === 200) {
                setTodoData(data.dataList);
            }
        }
    });

    const { mutate: mutateTodoState } = useMutation({
        mutationFn: (id: string) => updateTodoState(id),
        onSuccess: (data) => {
            if (data.status === 200) {
                mutateTodoList(date);
            }
        }
    });

    useEffect(() => {
        mutateTodoList(date);
    }, [date]);

    return (
        <ListWrapper>
            {todoData.map((data, idx) => (
                <ListItemWrapper key={idx}>
                    <ListItemButton disableRipple>
                        <ListItemIcon onClick={() => mutateTodoState(data.id)}>
                            {data.isDone === 'Y' ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                        </ListItemIcon>
                        <ListItemInlineText primary={data.title} />
                    </ListItemButton>
                </ListItemWrapper>
            ))}
        </ListWrapper>
    );
};
