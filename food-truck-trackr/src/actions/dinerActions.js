import { axiosWithAuth } from "../api/axiosWithAuth"
//import axios from 'axios';

export const GET_DINERS_START = 'GET_DINERS_START'
export const GET_DINERS_SUCCESS = 'GET_DINERS_SUCCESS'
export const GET_DINERS_FAIL = 'GET_DINERS_FAIL'

export const GET_USER_START = 'GET_USER_START'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const GET_FAVES_START = 'GET_USER_START'
export const GET_FAVES_SUCCESS = 'GET_USER_SUCCESS'
export const GET_FAVES_FAIL = 'GET_USER_FAIL'

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

export const getDinerUserData = (id) => (dispatch) => {
    dispatch({
        type: GET_USER_START
    })
    axiosWithAuth().get('/')
        .then(res => {
            console.log('getDinerUserData success: ', res.data.diners);
            const dinersArr = () => {
                const arr = res.data.diners;
                return arr.find(user => user.id === id)
            }
            dispatch({
                type: GET_USER_SUCCESS,
                payload: dinersArr()
            })
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: GET_USER_FAIL,
                payload: err.message
            });     
        })
} 

export const getDinerFaves = (id) => (dispatch) => {
    dispatch({
        type: GET_FAVES_START,
        payload: true
    })
    axiosWithAuth()
        .get(`/restricted/diner/${id}/favoritetrucks`)
        .then(res => {
            console.log('get diner faves success', res)
            dispatch({
                type: GET_FAVES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.error('get diner faves failure', err)
            dispatch({
                type: GET_FAVES_FAIL,
                payload: err.message
            })
        })
}