import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookieToken = () => {
    return cookies.get('token') || '';
};

export const removeCookieToken = () => {
    return cookies.remove('token', { sameSite: 'strict', path: '/' });
};
