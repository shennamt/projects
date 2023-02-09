// import dependencies
import React, { createContext, useContext, useReducer} from 'react';

// preparing data layer
export const StateContext = createContext();

// higher order component where children refs to the app
// reducer listens for changes
// the initial state is what the app is loaded
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);