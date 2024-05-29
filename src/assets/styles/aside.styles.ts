import { transform } from '@babel/core';
import {
    Box,
    Button,
    ButtonBase,
    Chip,
    FormControl,
    List,
    ListItem,
    ListItemText,
    Modal,
    Paper,
    TextField,
    Typography,
    styled
} from '@mui/material';
import { DateCalendar, MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { CommonFormControl } from './common.styles';
import naver from '../imgs/social/btn_naver.svg';
import google from '../imgs/social/btn_google.svg';
import kakao from '../imgs/social/btn_kakao.svg';

export const CustomDatePicker = styled(DateCalendar)`
    width: 100% !important;
    padding: 0 5%;
    border-radius: 15px;
    background-color: #fff;
    height: 300px;
    ,
    & .MuiPickersCalendarHeader-root {
        padding: 0;
    }
    ,
    & .MuiDayCalendar-header {
        justify-content: space-between;
    }
    & .MuiDayCalendar-weekContainer {
        justify-content: space-between;
    }
`;

export const CustomList = styled(List)`
    padding: 0;
`;

export const CustomListItem = styled(ListItem)`
    padding: 0;
    margin-top: 15px;

    &:first-of-type {
        margin-top: 0;
    }

    & .MuiButtonBase-root {
        padding: 0;

        &:hover {
            background: none;
        }
    }
`;

export const CustomListItemText = styled(ListItemText)`
    & .MuiTypography-root {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;

export const CustomButton = styled(ButtonBase)(({ theme }) => ({
    width: '100%',
    padding: '15px 0',
    borderRadius: '15px',
    backgroundColor: theme.palette.primary.main,

    '& .MuiTypography-root': {
        color: '#fff'
    }
}));

export const useIconStyle = {
    sx: {
        color: 'rgba(0, 0, 0, 0.54)',
        width: '30px',
        height: 'auto',
        marginRight: '10px',
        cursor: 'pointer',
        transition: 'color .3s',
        '&:hover': {
            color: 'rgba(0, 0, 0, 0.8)' // 원하는 hover 스타일을 추가합니다.
        }
    }
};

export const CustomGroupBox = styled(Box)`
    position: absolute;
    bottom: 30px;
    width: 100%;
    max-height: 30vh;
    padding-right: 40px;
    z-index: 999;
`;

export const CustomGroupPaper = styled(Paper)`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
`;

export const CustomColorTestField = styled(TextField)`
    & .MuiInputBase-input::after {
        display: inline-block;
        content: '';
        width: 10px;
        height: 10px;
        background: #ccc;
    }
`;

export const CustomColorBox = styled(Box)`
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 15px;

    .circle-picker {
        justify-content: center;
        margin: 0 !important;

        > span > div {
            margin: 0 !important;
            padding: 5px;
        }
    }
`;

export const AuthBox = styled(Box)`
    position: relative;
    height: 40px;
    padding-left: 40px;
    align-items: center;
    display: flex;
`;

export const LogoBox = styled(Box)`
    position: absolute;
    left: 0;
    width: 40px;
`;

export const ChipIcon = styled(Box)`
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;

export const CustomClock = styled(MultiSectionDigitalClock)`
    & .MuiList-root {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    ,
    & .MuiButtonBase-root {
        border-radius: 20px;
    }
`;

export const CustomDateModal = styled(Box)(({ theme }) => ({
    position: 'absolute',
    transform: 'translate(0, 100%)',
    bottom: '-5px',
    zIndex: 999,
    background: '#fff',
    borderRadius: '20px',
    boxShadow: theme.shadows[2]
}));

export const CustomFormControl = styled(CommonFormControl)`
    margin-top: 30px;
`;
export const CustomTodoFormControl = styled(FormControl)`
    width: 100%;
`;
export const CustomTodoBox = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
`;
export const CustomTodoTitle = styled(Typography)`
    position: absolute;
    top: 20px;
    font-weight: bold;
    text-align: center;
`;
export const CustomDateButton = styled(Button)`
    border-radius: 20px;
    padding: 5px 13px;
    background: #f0f0f0;
    color: #333;
`;
export const CustomDateBox = styled(Box)`
    position: relative;
    display: flex;
    justify-content: center;
`;

export const SocialBox = styled(Box)`
    height: 147px;
    border-radius: 15px;
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    text-indent: -999px;
`;
export const SocialNaverBox = styled(SocialBox)`
    background-image: url('${naver}');
`;

export const SocialGoogleBox = styled(SocialBox)`
    background-image: url('${google}');
`;

export const SocialKakaoBox = styled(SocialBox)`
    background-image: url('${kakao}');
`;

export const CloseBtnWrap = styled(Box)`
    display: flex;
    flex-direction: row-reverse;
`;

export const closeBtn = {
    sx: {
        color: 'rgba(0, 0, 0, 0.54)',
        cursor: 'pointer'
    }
};
