import { List, ListItem, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { api } from '../../apis/baseApi';

export const GroupListComponent = () => {
    useEffect(() => {
        const getUserGroup = async () => {
            const res = await api.get('/group/list');
            console.log(res);
        };

        getUserGroup();
    }, []);

    return (
        <List>
            <ListItem>
                <ListItemText primary="운동" />
            </ListItem>
            <ListItem>
                <ListItemText primary="업무" />
            </ListItem>
        </List>
    );
};
