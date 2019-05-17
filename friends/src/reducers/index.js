// import action creators
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
} from '../actions';

const initialState = {
    friends: [],
    // deletingFriend: false,
    fetchingFriends: false,
    loggingIn: false,
    // savingFriends: false,
    // updatingFriend: false,
    error: null
};

function reducer(state = initialState, action) {
    console.log('Reducer: ', action);
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: '' //might need to comment this out?
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: 'Login Failed!'
            };
        case FETCHING_START:
            return {
                ...state,
                fetchingFriends: true,
                error: ''
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                error: '',
                friends: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: 'Fetching failed'
            }
        default: 
            return state;
    }
}

export default reducer;