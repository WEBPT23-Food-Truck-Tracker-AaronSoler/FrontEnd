import { ACTIONS } from '../actions';

const initialState = {
    //logged in diner info
    first_name:'',
    last_name:'',
    username:'',
    password: '',
    current_location:{},
    email:'',
    id:'',
    //app status
    isLoading: false,
    error: '',
    //all registered diners
    allDiners: []
};

export const dinerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOADING_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ACTIONS.LOGIN_DINER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                error: ''
            };
        case ACTIONS.LOGIN_DINER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;       
    };
};