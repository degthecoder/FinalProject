import axios from 'axios';

const url = 'http://192.168.1.4:8000';

export const fetchNearRestaurants = async () => {
    const resData =  await axios.get(`${url}/user/restaurants/`);
    
    return resData;
};  