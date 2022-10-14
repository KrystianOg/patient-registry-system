import axios from 'axios'
import config from '../config.json'

export const axiosPublic = axios.create({
    baseURL:  config.API_SERVER, 
})

export const axiosPrivate = axios.create({
    baseURL:  config.API_SERVER,
    headers: {
        'Content-Type': 'application/json',
    }, 
    withCredentials: true
})
