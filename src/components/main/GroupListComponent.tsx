import { CloseBtnWrap, GroupListColorIcon, closeBtn } from '../../assets/styles/aside.styles';
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
                            <GroupListColorIcon
                                sx={{
                                    backgroundColor: data.color
                                }}
                            ></GroupListColorIcon>
                            <ListItemInlineText primary={data.title} />
                        </ListItemWrapper>
                    ))}
            </ListWrapper>
        </>
    );
};
