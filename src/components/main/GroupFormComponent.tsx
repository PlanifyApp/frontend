import { useState } from 'react';
import { CommonFormControl } from '../../assets/styles/common.styles';
import { TextField } from '@mui/material';
import {
    CloseBtnWrap,
    CustomColorBox,
    CustomColorTestField,
    closeBtn
} from '../../assets/styles/aside.styles';
import { CirclePicker } from 'react-color';
import { FormControl } from '@mui/base';
import { ButtonComponent } from '../aside/ButtonComponent';
import { useRecoilState } from 'recoil';
import { groupList } from '../../recoil/groupList';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useModal } from '../../hooks/useModal';
import { useMutation } from '@tanstack/react-query';
import { saveGroupData } from '../../services/groupService';

export const GroupFormComponent = () => {
    const { handleToggle } = useModal();
    const [title, setTitle] = useState<string>('');
    const [color, setColor] = useState<string>('#fff');
    const [group, setGroup] = useRecoilState(groupList);
    const { mutate: mutateGroupData } = useMutation({
        mutationFn: () => saveGroupData({ title, color }),
        onSuccess: (data) => {
            if (data.status === 200) {
                setGroup([
                    ...group,
                    { id: data.id, title: data.newGroup.title, color: data.newGroup.color }
                ]);
                setTitle('');
                setColor('#fff');
            }
        }
    });

    const handleColor = (colorCode: string) => {
        setColor(colorCode);
    };

    return (
        <>
            <CloseBtnWrap marginBottom="10px">
                <CloseOutlinedIcon {...closeBtn} onClick={handleToggle} />
            </CloseBtnWrap>

            <CommonFormControl>
                <TextField
                    fullWidth
                    placeholder="그룹명을 입력해주세요."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </CommonFormControl>
            <CommonFormControl>
                <CustomColorTestField fullWidth value={color} />
            </CommonFormControl>
            <CommonFormControl>
                <CustomColorBox>
                    <CirclePicker
                        width="100%"
                        onChange={(data) => handleColor(data.hex)}
                        circleSize={40}
                    />
                </CustomColorBox>
            </CommonFormControl>
            <FormControl>
                <ButtonComponent str="추가" onClick={mutateGroupData} />
            </FormControl>
        </>
    );
};
