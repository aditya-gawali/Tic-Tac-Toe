// src/store.js

import { createStore } from 'redux';
import { UPDATE_USER_ROLE } from './actions/roleActions';
// import { UPDATE_USER_COMPANY } from './actions/companyActions';
// import { UPDATE_EMAIL } from './actions/emailActions';

// Initial state
const initialState = {
    role: "",
    // company: "",
    // email: ""
};

// Reducer (optional for this case)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Add cases here if you plan to use reducers for other actions
        case UPDATE_USER_ROLE:
            return {
                ...state,
                role: action.payload
            };
        // case UPDATE_USER_COMPANY:
        //     return {
        //         ...state,
        //         company: action.payload
        //     };
        // case UPDATE_EMAIL:
        //     return {
        //         ...state,
        //         email: action.payload
        //     };


        default:
            return state;
    }
};

// Create Redux store
const store = createStore(reducer);

export default store;
