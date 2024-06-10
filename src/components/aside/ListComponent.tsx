import { useEffect } from 'react';
import { CustomList, CustomListItem, CustomListItemText } from '../../assets/styles/aside.styles';
import { ListItemButton, ListItemIcon } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { api } from '../../apis/baseApi';
import dayjs from 'dayjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoList } from '../../recoil/todoList';
import { selectedDate } from '../../recoil/selectedDate';

export const ListComponent = () => {
    const date = useRecoilValue(selectedDate);
    const [todoData, setTodoData] = useRecoilState(todoList);

    const handleOnClick = async (id: string) => {
        try {
            const { data } = await api.put(`/todo/check/${id}`);

            if (data.status === 200) {
                getTodoList();
            }
        } catch (error) {
            console.log(error);
        }
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

    useEffect(() => {
        getTodoList();
    }, [date]);

    return (
        <CustomList>
            {todoData.map((data, idx) => (
                <CustomListItem key={idx}>
                    <ListItemButton disableRipple>
                        <ListItemIcon onClick={() => handleOnClick(data.id)}>
                            {data.isDone === 'Y' ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                        </ListItemIcon>
                        <CustomListItemText primary={data.title} />
                    </ListItemButton>
                </CustomListItem>
            ))}
        </CustomList>
    );
};
