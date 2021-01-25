import users from './userReducer';
import books from './bookReducer';
import { combineReducers } from "redux";

export default combineReducers({
    users,
    books,
});