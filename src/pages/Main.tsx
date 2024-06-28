import { Grid, useMediaQuery } from '@mui/material';
import { Wrapper, theme, BodyWrapper, AsideWrapper } from '../assets/styles/common.styles';
import { Aside } from '../components/Aside';
import { Body } from '../components/Body';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/userState';
import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../services/userService';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export const Main = () => {
    const isShow = useMediaQuery(theme.breakpoints.up('desktop'));
    const [, setUserState] = useRecoilState(userState);
    const {
        data: useData,
        isLoading,
        error
    } = useQuery({ queryKey: ['user'], queryFn: getUserData });

    useEffect(() => {
        if (useData) {
            if (useData.status === 200) {
                setUserState({
                    id: useData.user.id,
                    email: useData.user.email,
                    name: useData.user.name,
                    nickname: useData.user.nickname,
                    image: useData.user.image
                });
            } else {
                alert(useData.message);
            }
        }
    }, [useData]);

    if (isLoading) return <Loading />;
    if (error) return <Error />;

    return (
        <Grid container columns={12} height="100%">
            {isShow && (
                <Grid desktop={3}>
                    <AsideWrapper>
                        <Aside />
                    </AsideWrapper>
                </Grid>
            )}
            <Grid mobile={12} desktop={9} height="100%">
                <Wrapper>
                    <BodyWrapper>
                        <Body />
                    </BodyWrapper>
                </Wrapper>
            </Grid>
        </Grid>
    );
};
