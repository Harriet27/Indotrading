import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    FOOD_START,
    FOOD_SUCCESS,
    FOOD_BY_ID,
    FOOD_FAILED,
} from '../cases';

export const FetchAll = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FOOD_START,
            });
            let res = await Axios.get(`${API_URL}/food`);
            dispatch({
                type: FOOD_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: FOOD_FAILED,
                payload: err,
            });
        }
    };
};

export const FetchById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FOOD_START,
            });
            let res = await Axios.get(`${API_URL}/food/${id}`);
            dispatch({
                type: FOOD_BY_ID,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: FOOD_FAILED,
                payload: err,
            });
        }
    };
};
