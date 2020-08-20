import {
    FOOD_START,
    FOOD_SUCCESS,
    FOOD_BY_ID,
    FOOD_FAILED,
} from '../cases';

const INITIAL_STATE = {
    foodList: [],
    foodByCategory: {},
    loading: false,
    error: '',
};

export const foodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FOOD_START:
            return {
                ...state,
                loading: true,
            };
        case FOOD_SUCCESS:
            return {
                ...state,
                foodList: action.payload,
                loading: false,
            };
        case FOOD_BY_ID:
            return {
                ...state,
                foodByCategory: action.payload,
                loading: false,
            };
        case FOOD_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default: return state;
    };
};
