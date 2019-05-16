// import action creators

const initialState = {
    friends: []
};

function reducer(state = initialState, action) {
    console.log('Reducer: ', action);
    switch(action.type) {
        default: 
            return state;
    }
}

export default reducer;