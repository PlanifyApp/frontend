import { Grid, useMediaQuery } from '@mui/material';
import { AsideContainer, BodyContainer, theme } from '../assets/styles/common.styles';
import { Aside } from '../components/Aside';
import { Body } from '../components/Body';
import { useEffect } from 'react';
import { api } from '../apis/baseApi';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/userState';

export const Main = () => {
    const isShow = useMediaQuery(theme.breakpoints.up('desktop'));
    const [, setUserState] = useRecoilState(userState);

    useEffect(() => {
        const getUser = async () => {
            const { data } = await api.get('/user/info');

            if (data.status === 200) {
                setUserState({
                    id: data.user.id,
                    email: data.user.email,
                    name: data.user.name,
                    nickname: data.user.nickname,
                    image: data.user.image
                });
            }
        };

        getUser();
    }, []);

    return (
        <Grid container columns={12} height="100%">
            {isShow && (
                <Grid desktop={3}>
                    <AsideContainer>
                        <Aside />
                    </AsideContainer>
                </Grid>
            )}
            <Grid mobile={12} desktop={9} height="100%">
                <BodyContainer>
                    <Body />
                </BodyContainer>
            </Grid>
        </Grid>
    );
};
