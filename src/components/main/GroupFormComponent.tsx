import React, { useState } from 'react';
import { CommonFormControl } from '../../assets/styles/common.styles';
import { TextField } from '@mui/material';
import { CustomColorBox, CustomColorTestField } from '../../assets/styles/aside.styles';
import { CirclePicker } from 'react-color';
import { FormControl } from '@mui/base';
import { ButtonComponent } from '../aside/ButtonComponent';
import { api } from '../../apis/baseApi';

export const GroupFormComponent = () => {
    const [title, setTitle] = useState<string>('');
    const [color, setColor] = useState<string>('#fff');

    const handleColor = (colorCode: string) => {
        setColor(colorCode);
    };

    const handleOnSubmit = async () => {
        const res = await api.post('/group/store', { title: title, color: color });

        console.log(res);
    };

    return (
        <form>
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
                <ButtonComponent str="추가" onClick={handleOnSubmit} />
            </FormControl>
        </form>
    );
};
