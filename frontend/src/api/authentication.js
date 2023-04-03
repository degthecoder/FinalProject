import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchLogin = (userData) => {
    console.log(userData);
    const authenticate = axios.post(`${url}/auth/login/`, userData).then((response) => {
        localStorage.setItem(userData.username, JSON.stringify(response))
        localStorage.setItem('username', userData.username);
    });
    return authenticate;
};

export const fetchRegister = (userData) => {
    console.log(userData);
    return axios.post(`${url}/auth/register/`, userData);
};



export const fetchLocation = async () => {
    const locData = await axios.get(`${url}/home/`,)
    // console.log("deneme");
    console.log(locData.data.city);
    return locData.data.city;
};  
