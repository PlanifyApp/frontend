import { ListItemIcon } from '@mui/material';
import { useEffect } from 'react';
import { api } from '../../apis/baseApi';
import {
    CloseBtnWrap,
    CustomList,
    CustomListItem,
    CustomListItemText,
    closeBtn
} from '../../assets/styles/aside.styles';
import { useRecoilState } from 'recoil';
import { groupList } from '../../recoil/groupList';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useModal } from '../../hooks/useModal';

export const GroupListComponent = () => {
    const { handleToggle } = useModal();
    const [group, setGroup] = useRecoilState(groupList);

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

    useEffect(() => {
        getUserGroup();
    }, []);

    return (
        <>
            <CloseBtnWrap>
                <CloseOutlinedIcon {...closeBtn} onClick={handleToggle} />
            </CloseBtnWrap>

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
        </>
    );
};
