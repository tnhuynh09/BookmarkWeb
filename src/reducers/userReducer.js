import { REGISTER_USER, LOGGED_IN, LOGGED_OUT } from "../actions/actionTypes";

const INITIAL_STATE = {};

function users(state = INITIAL_STATE, action) {
    console.log("REDUCERS - USERS");
    switch (action.type) {
        case REGISTER_USER:
            console.log("REDUCERS - action.type - REGISTER_USER");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                ...action.payload
            }

        case LOGGED_IN:
            console.log("REDUCERS - action.type - LOGGED_IN");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return {
                ...state,
                ...action.payload
            }
        // return action.payload;

        case LOGGED_OUT:
            console.log("REDUCERS - action.type - LOGGED_OUT");
            console.log("REDUCERS - action.type - action.payload", action.payload);

            return { ...INITIAL_STATE };
        default:
            return state;
    }
}

export default users;