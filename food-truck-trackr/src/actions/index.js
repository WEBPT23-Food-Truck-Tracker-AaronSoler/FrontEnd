import axios from 'axios';
import { dinerLocation } from '../api/dinerLocation'
import {useHistory} from 'react-router-dom'


export const ACTIONS = {
/* loading */
    LOADING_START: 'LOGIN_DINER_START',
    LOADING_END: 'LOGIN_DINER_END',
/* DINER login */
    LOGIN_DINER_SUCCESS:'LOGIN_DINER_SUCCESS',
    LOGIN_DINER_ERROR:'LOGIN_DINER_ERROR',
/* DINER register */
    REGISTER_DINER_SUCCESS:'REGISTER_DINER_SUCCESS',
    REGISTER_DINER_ERROR:'REGISTER_DINER_ERROR',
}

export const loginDiner = (dinerLoginData) => async (dispatch) => {
dispatch({
        type: ACTIONS.LOADING_START,
        payload: true
    }) 
    const geodb_diner_location = await dinerLocation();
    axios
        .post("https://build-week-food-truck.herokuapp.com/api/diner/login", {...dinerLoginData, location:geodb_diner_location})
        .then((response) =>  {
            dispatch({
                type: ACTIONS.LOGIN_DINER_SUCCESS,
                payload: response.data
            })
            localStorage.setItem('token', response.data.token)
            console.log('sg: actions - index.js: axios DINER LOGIN SUCCESS: ', response)
            /* redirect to DINER DASHBOARD */
        })
        .catch((err) => {
            dispatch({
                type: ACTIONS.LOGIN_DINER_ERROR,
                payload: err    
            })
            console.error('There was an error logging in this diner: ', err.message)
        });

}