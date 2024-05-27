import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { api } from '../../apis/baseApi';
import { CustomList, CustomListItem, CustomListItemText } from '../../assets/styles/aside.styles';

type groupType = {
    title: string;
    color: string;
};

export const GroupListComponent = () => {
    const [group, setGroup] = useState<groupType[]>([]);

    useEffect(() => {
        const getUserGroup = async () => {
            try {
                const { data } = await api.get('/group/list');

                if (data.status == 200) {
                    setGroup(data.newData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getUserGroup();
    }, []);

    console.log(group.length);
    return (
        <CustomList>
            {group.length > 0 &&
                group.map((data, index) => (
                    <CustomListItem key={index}>
                        <ListItemIcon
                            sx={{
                                minWidth: 'initial',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                marginRight: '10px',
                                backgroundColor: data.color
                            }}
                        ></ListItemIcon>
                        <CustomListItemText primary={data.title} />
                    </CustomListItem>
                ))}
        </CustomList>
    );
};
