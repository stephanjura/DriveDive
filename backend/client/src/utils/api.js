import axios from "axios";

export const baseURL = 'http://localhost:5000/';

export const axiosInstToSv = axios.create({ baseURL });

export const axiosAuthInstToSv = axios.create({
    baseURL, headers: {
        Authorization: `${localStorage.getItem('authtok')}`,
    }
})