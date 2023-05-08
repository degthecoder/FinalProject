import axios from 'axios';

const url = 'http://192.168.1.4:8000';

export const fetchLogin = (userData) => {
    // eslint-disable-next-line no-console
    console.log(userData);
    const authenticate = axios.post(`${url}/auth/login/`, userData);
    
    return authenticate;
};

export const fetchRegister = (userData) => {
    // console.log(userData);
    const authenticate = axios.post(`${url}/auth/register/`, userData);
    
    return authenticate;
};

