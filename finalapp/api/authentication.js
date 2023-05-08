
const url = 'http://192.168.1.4:8000';
import axios from "axios";

export const fetchLogin = async (userData) => {
    // eslint-disable-next-line no-console
    // console.log(userData);
    // const authenticate = axios.post(`${url}/auth/login/`, userData);
    const authenticate2 = fetch(`${url}/auth/login/`,{
        method: 'POST',
        body: userData,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return authenticate2;
};

export const fetchRegister = (userData) => {
    // console.log(userData);
    const authenticate = axios.post(`${url}/auth/register/`, userData);
    
    return authenticate;
};