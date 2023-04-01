import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchLogin = (userData) => {

    console.log(userData);
    return axios.post(`${url}/auth/login/`, userData);
};

export const fetchRegister = (userData) => {
    console.log(userData);
    return axios.post(`${url}/auth/register/`, userData);
};

export const fetchAuth = () => {
    const auth = axios.get('/auth/login');
    return auth;
}

export const fetchLocation = async () => {
    const locData = await axios.get(`${url}/home/`,)
    // console.log("deneme");
    console.log(locData.data.city);
    return locData.data.city;
};  
