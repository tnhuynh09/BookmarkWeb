import { GET_BOOKS, ADD_BOOK } from "../actions/actionTypes";

const INITIAL_STATE = {};

function books(state = INITIAL_STATE, action) {
    console.log("REDUCERS - BOOKS");
    switch (action.type) {
        case GET_BOOKS:
            console.log("REDUCERS - action.type - GET_BOOKS");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                ...action.payload
            }

        case ADD_BOOK:
            console.log("REDUCERS - action.type - ADD_BOOK");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default books;