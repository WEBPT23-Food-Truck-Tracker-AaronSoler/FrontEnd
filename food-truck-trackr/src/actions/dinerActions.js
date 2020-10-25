import { axiosWithAuth } from "../api/axiosWithAuth"
//import axios from 'axios';

export const GET_DINERS_START = 'GET_DINERS_START'
export const GET_DINERS_SUCCESS = 'GET_DINERS_SUCCESS'
export const GET_DINERS_FAIL = 'GET_DINERS_FAIL'

export const getAllDiners = () => (dispatch) => {
    dispatch({
        type: GET_DINERS_START
    })
    axiosWithAuth().get('/')
        .then(res => {
            //console.log(res);
            dispatch({
                type: GET_DINERS_SUCCESS,
                payload: res.data.diners
            })
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: GET_DINERS_FAIL,
                payload: err.message
            });     
        })
} 