// what the data layer looks like on first load
export const initialState = {
    term: null,
};

// when changing the data layer, we need to dispatch the action
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// state is the state of the data layer
// action is whatever is dispatched 
// job of reducer is just to listen for any dispatched actions
const reducer = (state, action) => {
    // console.logging here for debugging
    console.log(action);

    switch (action.type) {
        // if we know what the dispatch action is, return what the new data layer should look like
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        // if we dk what the dispatch action is, return current state
        default: return state;
    }
}

export default reducer;