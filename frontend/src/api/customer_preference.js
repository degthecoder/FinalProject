import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchCustomerPreference = async () => {
    const predData =  await axios.post(`${url}/user/newuser/`);
    console.log("gg");
    return predData;
};  