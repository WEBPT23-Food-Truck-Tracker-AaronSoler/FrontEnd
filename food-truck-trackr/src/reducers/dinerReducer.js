import { ACTIONS } from '../actions';
import { 
    GET_DINERS_FAIL, 
    GET_DINERS_SUCCESS, 
    GET_DINERS_START,
    GET_USER_FAIL, 
    GET_USER_SUCCESS, 
    GET_USER_START,
    GET_FAVES_FAIL, 
    GET_FAVES_SUCCESS, 
    GET_FAVES_START,
    GET_TRUCKS_FAIL, 
    GET_TRUCKS_SUCCESS, 
    GET_TRUCKS_START,
    ADD_FAVE_START,
    ADD_FAVE_SUCCESS,
    ADD_FAVE_FAIL,
    DEL_FAVE_START,
    DEL_FAVE_SUCCESS,
    DEL_FAVE_FAIL,
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
    favorites: [],
    //app status
    isLoading: false,
    error: '',
    //all registered diners
    allDiners: [],
    //trucks from seed
    allTrucks: []
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
        case GET_FAVES_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_FAVES_SUCCESS:
            return {
                ...state,
                favorites: [...action.payload],
                isLoading: false,
                error: ''
            };
        case GET_FAVES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case GET_TRUCKS_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_TRUCKS_SUCCESS:
            return {
                ...state,
                allTrucks: [...action.payload],
                isLoading: false,
                error: ''
            };
        case GET_TRUCKS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ADD_FAVE_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case ADD_FAVE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            };
        case ADD_FAVE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case DEL_FAVE_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case DEL_FAVE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            };
        case DEL_FAVE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ACTIONS.USER_LOGOUT:
            return initialState;
        default:
            return state;       
    };
};