import axios from 'axios';
import { dinerLocation } from './api/dinerLocation'


const ACTIONS = {
    LOGIN_DINER_START: 'LOGIN_DINER_START',
    LOGIN_DINER_SUCCESS:'LOGIN_DINER_SUCCESS',
    LOGIN_DINER_ERROR:'LOGIN_DINER_ERROR',
}

const loginDiner = async (dinerLoginData) => (dispatch) => {
    dispatch({
        type: ACTIONS.LOGIN_DINER_START
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
        .catch((err) =>{
            dispatch({
                type: ACTIONS.LOGIN_DINER_FAIL,
                payload: err    
            })
            console.log('There was an error logging in this diner: ', err)
        });

}