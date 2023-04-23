import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const postCuisinePreference = async (userPreference) => {
    const predData =  await axios.post(`${url}/user/newuser/`,userPreference);
    
    return predData;
};  

export const fetchCuisinePreference = async (userPreference) => {
    const predData =  await axios.get(`${url}/user/newuser/`,userPreference);
    
    return predData;
};  

export const postAmbiencePreference = async (userPreference) => {
    const predData =  await axios.post(`${url}/user/newuser/`, userPreference);
    
    return predData;
}; 

export const fetchAmbiencePreference = async (userPreference) => {
    const predData =  await axios.get(`${url}/user/newuser/`,userPreference);
    
    return predData;
};  