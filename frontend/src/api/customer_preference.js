import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchCustomerPreference = async (userPreference) => {
    const predData =  await axios.post(`${url}/user/newuser/`,userPreference);
    
    return predData;
};  