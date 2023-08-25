import axios from "axios";


export const API_URL = "http://localhost:3001"

const axiosAPI =  axios.create({
    withCredentials:true,
    baseURL:API_URL
})


axiosAPI.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
})

export default axiosAPI;