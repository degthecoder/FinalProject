import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchNearRestaurants = async () => {
    if(sessionStorage.getItem("location")){
        const resData =  await axios.get(`${url}/user/feed/`);

        return resData;
    }

    setTimeout(async () => {
        const resData =  await axios.get(`${url}/user/feed/`);

        return resData
    }
    , 2000);
        

};  


export const fetchAllRestaurants = async () => {
    const resData =  await axios.get(`${url}/user/feed/all/`);
    
    return resData;
};  

export const fetchRestaurantReviews = async (data) => {
    const resData =  await axios.post(`${url}/user/restaurant/`, data);
    
    return resData;
}

export const postRestaurantReviews = async (data) => {
    const resData =  await axios.post(`${url}/user/restaurant/insertreviews/`, data);
    
    return resData;
}

export const fetchUserReviews = async () => {
    const resData =  await axios.get(`${url}/user/restaurant/returnreviews/`);
    
    return resData;
}

export const postReasonOfVisit = async (data) => {
    const resData =  await axios.post(`${url}/user/feed/reasonOfVisit/`,data);
    
    
    return resData;
};