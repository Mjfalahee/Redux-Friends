import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

// LOGIN  Types \\

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// LOGIN ACTION \\

export const logIn = credentials => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
        .post(
            'http://localhost:5000/api/login', credentials
            )
        .then(res => {
            console.log("USER DATA: ");
            console.log(res.data.payload);
            localStorage.setItem('token', res.data.payload);
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
        })
        .catch(error => console.log(error))
};

// FETCHING types \\

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({type: FETCHING_START});
    axiosAuth()
        .get('/api/friends')
        .then(res => {
            dispatch({type: FETCHING_SUCCESS, payload: res.data})
        })
        .catch(error => {
            console.log(error.response);
            dispatch({type: FETCHING_FAILURE});
        })
};