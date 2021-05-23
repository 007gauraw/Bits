import axios from 'axios';

const BASE_URL = "https://api.discogs.com/";

export const get = (path, param) =>{
     return axios.get(`${BASE_URL}${path}?${param}`)
     
}