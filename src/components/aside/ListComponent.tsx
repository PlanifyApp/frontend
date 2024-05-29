import React, { useEffect, useState } from 'react';
import { CustomList, CustomListItem, CustomListItemText } from '../../assets/styles/aside.styles';
import { ListItemButton, ListItemIcon } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { api } from '../../apis/baseApi';
import dayjs, { Dayjs } from 'dayjs';
import { currentDateInfo } from '../../utils/date';

export const ListComponent = () => {
    const [date, setDate] = useState<Dayjs>(dayjs(currentDateInfo.date));
    const [data, setData] = useState<
        { id: string; title: string; date: string; is_done: string }[]
    >([]);

    const handleOnClick = async (id: string) => {
        try {
            const res = await api.post('/todo/store', {
                id: id
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getTodoList = async () => {
            try {
                const { data } = await api.get('/todo/list', {
                    params: {
                        date: date.format('YYYY-MM-DD')
                    }
                });

                if (data.status === 200) {
                    setData(data.newData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getTodoList();
    }, []);

    return (
        <CustomList>
            {data.map((data, idx) => (
                <CustomListItem key={idx}>
                    <ListItemButton disableRipple>
                        <ListItemIcon onClick={handleOnClick}>
                            {data.is_done === 'Y' ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                        </ListItemIcon>
                        <CustomListItemText primary={data.title} />
                    </ListItemButton>
                </CustomListItem>
            ))}
        </CustomList>
    );
};
