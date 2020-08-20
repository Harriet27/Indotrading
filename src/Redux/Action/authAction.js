import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    AUTH_START,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_FAILED,
} from '../cases';
import Swal from 'sweetalert2';

export const Login = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: AUTH_START,
            });
            let res = await Axios.get(`${API_URL}/users?username=${username}&password=${password}`);
            if (res.data[0]) {
                localStorage.setItem('token', JSON.stringify({
                    username: res.data[0].username,
                    password: res.data[0].password,
                    id: res.data[0].id,
                }));
                dispatch({
                    type: AUTH_LOGIN,
                    payload: res.data[0],
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Wrong username/password!',
                });
            }
        } catch (err) {
            dispatch({
                type: AUTH_FAILED,
                payload: err,
            });
        }
    };
};

export const keepLogin = (token) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: AUTH_START,
            });
            token = JSON.parse(token);
            let { username, password } = token;
            let res = await Axios.get(`${API_URL}/users?username=${username}&password=${password}`);
            dispatch({
                type: AUTH_LOGIN,
                payload: res.data[0],
            });
        } catch (err) {
            dispatch({
                type: AUTH_FAILED,
                payload: err,
            });
        }
    }
};

export const Logout = () => {
    return (dispatch) => {
        dispatch({
            type: AUTH_LOGOUT,
        });
    };
};
