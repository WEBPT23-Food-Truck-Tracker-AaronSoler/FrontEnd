import { axiosWithAuth } from "../api/axiosWithAuth"
//import axios from 'axios';

export const GET_DINERS_START = 'GET_DINERS_START'
export const GET_DINERS_SUCCESS = 'GET_DINERS_SUCCESS'
export const GET_DINERS_FAIL = 'GET_DINERS_FAIL'

export const GET_USER_START = 'GET_USER_START'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_USER_FAIL'

export const GET_FAVES_START = 'GET_FAVES_START'
export const GET_FAVES_SUCCESS = 'GET_FAVES_SUCCESS'
export const GET_FAVES_FAIL = 'GET_FAVES_FAIL'

export const GET_TRUCKS_START = 'GET_TRUCKS_START'
export const GET_TRUCKS_SUCCESS = 'GET_TRUCKS_SUCCESS'
export const GET_TRUCKS_FAIL = 'GET_TRUCKS_FAIL'

export const ADD_FAVE_START = 'ADD_FAVE_START'
export const ADD_FAVE_SUCCESS = 'ADD_FAVE_SUCCESS'
export const ADD_FAVE_FAIL = 'ADD_FAVE_FAIL'

export const DEL_FAVE_START = 'DEL_FAVE_START'
export const DEL_FAVE_SUCCESS = 'DEL_FAVE_SUCCESS'
export const DEL_FAVE_FAIL = 'DEL_FAVE_FAIL'

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

export const getAllTrucks = (id) => (dispatch) => {
    dispatch({
        type: GET_TRUCKS_START,
    })
    axiosWithAuth().get(`/restricted/diner/${id}/dashboard?radius=1000`)
        .then(res => {
            console.log('gettrucks', res)
            dispatch({
                type: GET_TRUCKS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: GET_TRUCKS_FAIL,
                payload: err.message
            });     
        })
} 

export const addFaveTruck =  (dinerID, truckID) => (dispatch) => {
    dispatch({
        type: ADD_FAVE_START
    })
    axiosWithAuth()
        .post(`/restricted/diner/${dinerID}/favoritetrucks`, {truck_id: truckID})
        .then(res =>  {
             dispatch({
                type: ADD_FAVE_SUCCESS
            });
            getDinerFaves(dinerID);
            console.log('added fave truck!', res)
        })
        .catch(err => {
            dispatch({
                type: ADD_FAVE_FAIL,
                payload: err.message
            })
            console.error('error addind fave truck', err)
        })
}
export const delFaveTruck = (dinerID, faveID) =>  (dispatch) => {
    dispatch({
        type: DEL_FAVE_START
    })
    axiosWithAuth()
        .delete(`/restricted/diner/${dinerID}/favoritetrucks`, {favorite_id: faveID})
        .then(res => {
            dispatch({
                type: DEL_FAVE_SUCCESS
            })
            console.log('delete fave truck!', res)
        })
        .catch(err => {
            dispatch({
                type: DEL_FAVE_FAIL,
                payload: err.message
            })
            console.error('error deleting fave truck', err)
        })
}