import { ListItemIcon } from '@mui/material';
import { useEffect } from 'react';
import { api } from '../../apis/baseApi';
import { CloseBtnWrap, closeBtn } from '../../assets/styles/aside.styles';
import { useRecoilState } from 'recoil';
import { groupList } from '../../recoil/groupList';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useModal } from '../../hooks/useModal';
import {
    ListItemInlineText,
    ListItemWrapper,
    ListWrapper
} from '../../assets/styles/common.styles';
import { useQuery } from '@tanstack/react-query';
import { getGroupList } from '../../services/groupService';

export const GroupListComponent = () => {
    const { handleToggle } = useModal();
    const [group, setGroup] = useRecoilState(groupList);
    useQuery({
        queryKey: ['groupList'],
        queryFn: async () => {
            const data = await getGroupList();
            if (data.status == 200) {
                setGroup(data.newData);
            }
        }
    });

    return (
        <>
            <CloseBtnWrap>
                <CloseOutlinedIcon {...closeBtn} onClick={handleToggle} />
            </CloseBtnWrap>

            <ListWrapper>
                {group.length > 0 &&
                    group.map((data, index) => (
                        <ListItemWrapper key={index}>
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
                            <ListItemInlineText primary={data.title} />
                        </ListItemWrapper>
                    ))}
            </ListWrapper>
        </>
    );
};
