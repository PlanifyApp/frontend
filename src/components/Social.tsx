import { Grid, Stack, Typography } from '@mui/material';
import { SocialGoogleBox, SocialKakaoBox, SocialNaverBox } from '../assets/styles/aside.styles';

export const Social = () => {
    const naverLocation = () => {
        window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/naver`;
    };

    const googleLocation = () => {
        window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/google`;
    };

    const kakaoLocation = () => {
        window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/kakao`;
    };

    return (
        <Stack spacing={3}>
            <Typography variant="h3" align="center">
                로그인
            </Typography>
            <Typography variant="body1" align="center">
                로그인 후 서비스를 이용해보세요!
            </Typography>
            <Grid container columns={3} height="100%" alignItems="center" justifyContent="center">
                <Grid item mobile={1}>
                    <SocialNaverBox className="socialNaver" onClick={naverLocation}>
                        naver
                    </SocialNaverBox>
                </Grid>
                <Grid item mobile={1}>
                    <SocialGoogleBox className="socialGoogle" onClick={googleLocation}>
                        google
                    </SocialGoogleBox>
                </Grid>
                <Grid item mobile={1}>
                    <SocialKakaoBox className="socialKakao" onClick={kakaoLocation}>
                        kakao
                    </SocialKakaoBox>
                </Grid>
            </Grid>
        </Stack>
    );
};
