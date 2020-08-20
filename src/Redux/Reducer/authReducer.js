import {
    AUTH_START,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_FAILED,
} from '../cases';

const INITIAL_STATE = {
    id: null,
    profile: [],
    logged: false,
    loading: false,
    error: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
            };
        case AUTH_LOGIN:
            return {
                ...state,
                profile: action.payload,
                logged: true,
                loading: false,
            };
        case AUTH_LOGOUT: 
            return INITIAL_STATE;
        case AUTH_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default: return state;
    };
};
