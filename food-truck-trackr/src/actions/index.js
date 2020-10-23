import axios from 'axios';
import { dinerLocation } from '../api/dinerLocation';

export const ACTIONS = {
/* LOADING */
    LOADING_START: 'LOADING_START',
    LOADING_END: 'LOADING_END',

/* DINER login */
    LOGIN_DINER_SUCCESS:'LOGIN_DINER_SUCCESS',
    LOGIN_DINER_ERROR:'LOGIN_DINER_ERROR',

/* OPERATOR login */
    LOGIN_OPERATOR_SUCCESS:'LOGIN_OPERATOR_SUCCESS',
    LOGIN_OPERATOR_ERROR:'LOGIN_OPERATOR_ERROR',

/* ALL USERS fetch */
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_ERROR: 'GET_USERS_ERROR'
}

export const loginDiner = (dinerLoginData) => async (dispatch) => {
    dispatch({
            type: ACTIONS.LOADING_START,
            payload: true
        });
    const geodb_diner_location = await dinerLocation();
    axios
        .post(
            "https://build-week-food-truck.herokuapp.com/api/diner/login", 
            {...dinerLoginData, location: geodb_diner_location}
        )
        .then((response) =>  {
            dispatch({
                type: ACTIONS.LOGIN_DINER_SUCCESS,
                payload: response.data
            })
            localStorage.setItem('token', response.data.token)
            console.log('sg: actions - index.js: axios DINER LOGIN SUCCESS: ', response)
        })
        .catch((err) => {
            dispatch({
                type: ACTIONS.LOGIN_DINER_ERROR,
                payload: err    
            })
            console.error('There was an error logging in this diner: ', err.message)
        });

}

export const loginOperator = (operatorLoginData) => (dispatch) => {
    dispatch({
        type: ACTIONS.LOADING_START,
        payload: true
    });
    axios
    .post(
        "https://build-week-food-truck.herokuapp.com/api/operator/login", 
        operatorLoginData
    )
    .then((res) =>  {
        dispatch({
            type: ACTIONS.LOGIN_OPERATOR_SUCCESS,
            payload: {
                message: res.data.message,
                id: res.data.id,
            }
        })
        localStorage.setItem('token', res.data.token)
        console.log('sg: actions - index.js: axios OPERATOR LOGIN SUCCESS: ', res)
    })
    .catch((err) => {
        dispatch({
            type: ACTIONS.LOGIN_OPERATOR_ERROR,
            payload: err   
        })
        console.error('There was an error logging in this operator: ', err.message)
    });
}

export const getUsers = () => (dispatch) => {
    axios.get('https://build-week-food-truck.herokuapp.com/api')
        .then(res => {
            dispatch({
                type: ACTIONS.GET_USERS_SUCCESS,
                payload: {
                    all_diners: res.data.diners,
                    all_operators: res.data.operators
                }
            })
        })
        .catch(err => {
            dispatch({
                type: ACTIONS.GET_USERS_ERROR,
                payload: err
            })
            console.error('There was an error grabing the data location: ', err)            
        })
}
