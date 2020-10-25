import { axiosWithAuth } from "../api/axiosWithAuth"
//import axios from 'axios';

const GET_DINERS_START = 'GET_DINERS_START'
const GET_DINERS_SUCCESS = 'GET_DINERS_SUCCESS'
const GET_DINERS_FAIL = 'GET_DINERS_FAIL'

export const getAllDiners = () => (dispatch) => {
    dispatch({
        type: GET_DINERS_START
    })
    axiosWithAuth().get('/')
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_DINERS_SUCCESS,
            })
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: GET_DINERS_FAIL,
            });     
        })
} 