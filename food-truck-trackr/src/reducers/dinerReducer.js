import { ACTIONS } from '../actions';

const initialState = {
    dinerData: {
        first_name:'',
        last_name:'',
        username:'',
        current_location:{},
        email:'',
        id:''
    },
    isLoading: false,
    error: '',
};

export const dinerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.LOADING_START: 
            return {
                ...state,
                isLoading: true,
            }
        case ACTIONS.LOGIN_DINER_SUCCESS:
            return {
                ...state,
                dinerData: {...action.payload},
                isLoading: false,
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