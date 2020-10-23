import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token, 
        },
        baseURL: 'https://build-week-food-truck.herokuapp.com/api'
    })
}