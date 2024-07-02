import { Box, styled } from '@mui/material';
import naver from '../imgs/social/btn_naver.svg';
import google from '../imgs/social/btn_google.svg';
import kakao from '../imgs/social/btn_kakao.svg';

export const SocialBox = styled(Box)`
    height: 147px;
    border-radius: 15px;
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    text-indent: -9999px;
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
