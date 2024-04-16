import React from 'react';
import { CustomList, CustomListItem, CustomListItemText } from '../../assets/styles/aside.styles';
import { ListItemButton, ListItemIcon } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

export const ListComponent = () => {
    return (
        <CustomList>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                (data, idx) => (
                    <CustomListItem key={idx}>
                        <ListItemButton disableRipple>
                            <ListItemIcon>
                                <CheckBox />
                            </ListItemIcon>
                            <CustomListItemText primary="testasdfasdfasdfasdfasdfasdfdfasdfasdfaasdgsdfgfdagasdgasgsdsd" />
                        </ListItemButton>
                    </CustomListItem>
                )
            )}
        </CustomList>
    );
};
