import {combineReducers} from 'redux';
/* import {mainReducer as main} from './mainReducer'; */
import {dinerReducer as diner} from './dinerReducer'
import {operatorReducer as operator} from './operatorReducer'

export default combineReducers({
    diner, 
    operator
})