import React from 'react';
import {
    CustomList,
    CustomListItem,
    CustomListItemText
} from '../../assets/styles/aside.styles';
import { ListItemButton, ListItemIcon } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

export const ListComponent = () => {
    return (
        <CustomList>
            <CustomListItem>
                <ListItemButton disableRipple>
                    <ListItemIcon>
                        <CheckBox />
                    </ListItemIcon>
                    <CustomListItemText primary="testasdfasdfasdfasdfasdfasdfdfasdfasdfaasdgsdfgfdagasdgasgsdsd" />
                </ListItemButton>
            </CustomListItem>
        </CustomList>
    );
};
