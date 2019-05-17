import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

// Types \\

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const logIn = credentials => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
        .post(
            'http://localhost:5000/api/login', credentials
            )
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
        })
        .catch(error => console.log(error))
};