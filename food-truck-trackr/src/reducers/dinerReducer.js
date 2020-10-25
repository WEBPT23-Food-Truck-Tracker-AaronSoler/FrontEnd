import { ACTIONS } from '../actions';
import { 
    GET_DINERS_FAIL, 
    GET_DINERS_SUCCESS, 
    GET_DINERS_START,
    GET_USER_FAIL, 
    GET_USER_SUCCESS, 
    GET_USER_START,
} from '../actions/dinerActions'

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
        case GET_DINERS_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_DINERS_SUCCESS:
            return {
                ...state,
                allDiners: [...action.payload],
                isLoading: false,
                error: ''
            };
        case GET_DINERS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case GET_USER_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                error: ''
            };
        case GET_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ACTIONS.USER_LOGOUT:
            return state;
        default:
            return state;       
    };
};