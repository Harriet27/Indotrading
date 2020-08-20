import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    CART_START,
    CART_SUCCESS,
    CART_CLEAR,
    CART_FAILED,
} from '../cases';

export const FetchCart = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CART_START,
            });
            let res = await Axios.get(`${API_URL}/cart`);
            dispatch({
                type: CART_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: CART_FAILED,
                payload: err,
            });
        }
    };
};

export const CheckoutCart = (data, userId) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CART_START,
            });
            let res = await Axios.get(`${API_URL}/cart?userId=${userId}`);
            res.data.forEach(async (val) => {
                await Axios.delete(`${API_URL}/cart/${val.id}`);
            });
            dispatch({
                type: CART_CLEAR,
            });
        } catch (err) {
            dispatch({
                type: CART_FAILED,
                payload: err,
            });
        }
    };
};
