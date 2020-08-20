import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { foodReducer } from './foodReducer';
import { cartReducer } from './cartReducer';

export default combineReducers({
    auth: authReducer,
    food: foodReducer,
    cart: cartReducer,
});
