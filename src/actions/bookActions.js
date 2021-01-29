import axios from 'axios';
import { GET_SEARCHED_BOOKS, ADD_BOOK, GET_BOOKS, DELETE_BOOK } from "./actionTypes";
// import { TOKEN_LOCALSTORAGE } from "../components/App.js";
// import useLocalStorage from "../hooks/useLocalStorage";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

function getSearchedBooks(data) {
    console.log("getSearchedBooks - data", data);
    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/books?searchParam=${data.search_query}`);
        let searched_books = {
            searched_books: res.data.books
        }

        console.log("TIGER ---- searched_books", searched_books);
        dispatch(retrievedBooks(searched_books));
    }
}

function retrievedBooks(searched_books) {
    console.log("bookActions - retrievedBooks - searched_books", searched_books);
    return { type: GET_SEARCHED_BOOKS, payload: searched_books };
}

function addBookToShelf(book) {
    console.log("addBookToShelf - book", book);
    const localStoragePersistRoot = window.localStorage.getItem("persist:root");
    const localStorageJson = JSON.parse(localStoragePersistRoot);
    const user = JSON.parse(localStorageJson.users)
    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/books/add`, {
            googleBookId: book.googleBookId,
            bookImage: book.bookImage,
            title: book.title,
            authors: book.authors,
            description: book.description,
            averageRating: book.averageRating,
            publishedDate: book.publishedDate,
            publisher: book.publisher,
            pageCount: book.pageCount,
            isbn: book.isbn
        }, {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        });

        console.log("addBookToShelf - RESULT OF BOOKS ==== JUST RES ", res);
        console.log("addBookToShelf - RESULT OF BOOKS ==== JUST RES DATA", res.data);

        console.log("addBookToShelf - RESULT OF BOOKS ==== res.data.books", res.data.book);
        let books = {
            books: res.data.success
        }
        console.log("addBookToShelf - RESULT OF BOOKS", books);

        dispatch(addBook(books));
    }
}

function addBook(book) {
    console.log("bookActions - addBook - book", book);
    return { type: ADD_BOOK, payload: book };
}

function getBooks() {
    const localStoragePersistRoot = window.localStorage.getItem("persist:root");
    const localStorageJson = JSON.parse(localStoragePersistRoot);
    const user = JSON.parse(localStorageJson.users);
    console.log("bookActions - getBooks - user", user);

    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/books/bookshelf`, {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        });
        console.log("BOOK ACTIONS - getBooks - res", res.data);

        let users_books = {
            users_books: res.data.users_books
        }

        //     console.log("BOOK ACTIONS - getBooks - users_books", users_books);

        dispatch(retrievedBookshelf(users_books));

        // dispatch(retrievedBookshelf(null));
    }
}

function retrievedBookshelf(users_books) {
    console.log("bookActions - retrievedBookshelf - users_books", users_books);
    return { type: GET_BOOKS, payload: users_books };
}

function deleteBook(users_books_id) {
    const localStoragePersistRoot = window.localStorage.getItem("persist:root");
    const localStorageJson = JSON.parse(localStoragePersistRoot);
    const user = JSON.parse(localStorageJson.users);
    console.log("bookActions - getBooks - user", user);

    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/books/delete`, {
            usersBooksId: users_books_id,
        }, {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        });

        // let delete_book = {
        //     delete_book: res.data.success
        // }

        dispatch(deletedBook(users_books_id));
    }
}

function deletedBook(users_books_id) {
    console.log("bookActions - retrievedBookshelf - users_books_id", users_books_id);
    return { type: DELETE_BOOK, payload: users_books_id };
}

export { getSearchedBooks, addBookToShelf, getBooks, deleteBook }