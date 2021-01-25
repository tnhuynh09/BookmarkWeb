import axios from 'axios';
import { GET_BOOKS } from "./actionTypes";
// import { TOKEN_LOCALSTORAGE } from "../components/App.js";
// import useLocalStorage from "../hooks/useLocalStorage";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

function getBooks(data) {
    console.log("getBooks - data", data);
    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/books?searchParam=${data.search_query}`);
        let books = {
            books: res.data.books
        }

        console.log("TIGER ---- books", books);
        dispatch(retrievedBooks(books));
    }
}

function retrievedBooks(books) {
    console.log("bookActions - retrievedBooks - books", books);
    return { type: GET_BOOKS, payload: books };
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
        let books = {
            books: res.data.books
        }

        dispatch(addBook(books));
    }
}

function addBook(books) {
    console.log("bookActions - addBook - books", books);
    return { type: GET_BOOKS, payload: books };
}

export { getBooks, addBookToShelf }