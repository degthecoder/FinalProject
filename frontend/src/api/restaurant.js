import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchNearRestaurants = async () => {
    const resData =  await axios.get(`${url}/user/restaurants/`);
    
    return resData;
};  