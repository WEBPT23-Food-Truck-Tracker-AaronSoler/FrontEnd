import { ACTIONS } from '../actions';

const initialState = {
    operatorData: {
        welcome_msg: '',
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        id:''
    },
    allOperators: [],
    isLoading: false,
    error: '',
};

export const operatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOADING_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ACTIONS.GET_USERS_SUCCESS: 
            return {
                ...state,
                allOperators: action.payload.all_operators,
                isLoading: false,
                error: ''
            }
        case ACTIONS.GET_USERS_ERROR: 
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case ACTIONS.LOGIN_OPERATOR_SUCCESS:
            return {
                ...state,
                operatorData: {
                    welcome_msg: action.payload.message,
                    id: action.payload.id
                },
                isLoading: false,
                error:''
            };
        case ACTIONS.LOGIN_OPERATOR_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;       
    };
};