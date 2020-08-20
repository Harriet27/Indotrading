import {
    CART_START,
    CART_SUCCESS,
    CART_CLEAR,
    CART_FAILED,
} from '../cases';

const INITIAL_STATE = {
    cartList: [],
    loading: false,
    error: '',
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_START:
            return {
                ...state,
                loading: true,
            };
        case CART_SUCCESS:
            return {
                ...state,
                cartList: action.payload,
                loading: false,
            };
        case CART_CLEAR:
            return {
                ...state,
                cartList: [],
                loading: false,
            };
        case CART_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default: return state;
    }
};
