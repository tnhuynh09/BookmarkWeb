import { GET_SEARCHED_BOOKS, ADD_BOOK, GET_BOOKS, DELETE_BOOK } from "../actions/actionTypes";

const INITIAL_STATE = {};

function books(state = INITIAL_STATE, action) {
    console.log("REDUCERS - BOOKS");
    switch (action.type) {
        case GET_SEARCHED_BOOKS:
            console.log("REDUCERS - action.type - GET_SEARCHED_BOOKS");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                ...action.payload
            }

        case ADD_BOOK:
            console.log("REDUCERS - BOOKS - ADD_BOOK - state", state);
            console.log("REDUCERS - action.type - ADD_BOOK");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                // ...action.payload
            }

        case GET_BOOKS:
            console.log("REDUCERS - action.type - GET_BOOKS");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                ...action.payload
            }

        case DELETE_BOOK:
            console.log("STATE ======>", state);
            console.log("REDUCERS - state.users_books - DELETE_BOOK", state.users_books);
            console.log("REDUCERS - action.type - DELETE_BOOK");
            console.log("REDUCERS - action.type - ACTION", action);
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                // [state.users_books]: {
                //     ...action.payload, users_books: users_books.filter(user_book => user_book.id !== action.user)
                // }
            }

        default:
            return state;
    }
}

export default books;