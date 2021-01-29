import axios from 'axios';
import { ADD_JOURNAL } from "./actionTypes";
// import { TOKEN_LOCALSTORAGE } from "../components/App.js";
// import useLocalStorage from "../hooks/useLocalStorage";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

function addJournal(book_id) {
    console.log("addJournal - book_id", book_id);
    const localStoragePersistRoot = window.localStorage.getItem("persist:root");
    const localStorageJson = JSON.parse(localStoragePersistRoot);
    const user = JSON.parse(localStorageJson.users)
    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/journals/add`, {
            book_id: book.book_id,
        }, {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        });

        let book = {
            book: res.data.book
        }

        dispatch(addedJournal(book_id));
    }
}

function addedJournal(book_id) {
    console.log("journalActions - addedJournal - book_id", book_id);
    return { type: ADD_JOURNAL, payload: book_id };
}



export { addJournal }