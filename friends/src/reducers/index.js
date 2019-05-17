// import action creators

const initialState = {
    friends: [],
    deletingFriend: false,
    fetchingFriends: false,
    logginIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
};

function reducer(state = initialState, action) {
    console.log('Reducer: ', action);
    switch(action.type) {
        default: 
            return state;
    }
}

export default reducer;