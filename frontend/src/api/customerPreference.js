import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const postCuisinePreference = async (userPreference) => {
    const predData =  await axios.post(`${url}/user/newuser/cuisine`,userPreference);
    
    return predData;
};  

export const fetchCuisinePreference = async (userPreference) => {
    const predData =  await axios.get(`${url}/user/newuser/cuisine`,userPreference);
    
    return predData;
};  

export const postAmbiencePreference = async (userPreference) => {
    const predData =  await axios.post(`${url}/user/newuser/ambience`, userPreference);
    
    return predData;
}; 

export const fetchAmbiencePreference = async (userPreference) => {
    const predData =  await axios.get(`${url}/user/newuser/ambience`,userPreference);
    
    return predData;
};  

export const postFlavorPreference = async (userPreference) => {
    const predData =  await axios.post(`${url}/user/newuser/flavor`,userPreference);
    
    return predData;
};  

export const fetchFlavorPreference = async (userPreference) => {
    const predData =  await axios.get(`${url}/user/newuser/flavor`,userPreference);
    
    return predData;
};  

export const postInterestPreference = async (userPreference) => {
    const predData =  await axios.post(`${url}/user/newuser/interest`,userPreference);
    
    return predData;
};  

export const fetchInterestPreference = async (userPreference) => {
    const predData =  await axios.get(`${url}/user/newuser/interest`,userPreference);
    
    return predData;
};  