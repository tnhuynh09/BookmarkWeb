import axios from "axios";
import { TOKEN_LOCALSTORAGE, USER_NAME } from "./App.js"
import useLocalStorage from "../hooks/useLocalStorage";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const BASE_URL = "http://localhost:3001";

class BookmarkApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
        // // paramsOrData._token = ( // for now, hardcode token for "testing"
        // //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
        // //     "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
        // //     "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");

        // let _token = localStorage.getItem(TOKEN_LOCALSTORAGE);
        // if (_token != null) {
        //     _token = _token.replace(/"/g, "");
        // }

        // console.debug("API Call:", endpoint, paramsOrData, verb);

        // try {
        //     return (await axios({
        //         method: verb,
        //         url: `${BASE_URL}/${endpoint}`,
        //         //     [verb === "get" ? "params" : "data"]: paramsOrData
        //         // })).data;
        //         [verb === "get" ? "params" : "data"]: { _token, ...paramsOrData }
        //     })).data;
        //     // axios sends query string data via the "params" key,
        //     // and request body data via the "data" key,
        //     // so the key we need depends on the HTTP verb
        // }

        // catch (err) {
        //     console.error("API Error:", err.response);
        //     let message = err.response.data.message;
        //     throw Array.isArray(message) ? message : [message];
        // }

        const token = localStorage.getItem(TOKEN_LOCALSTORAGE);

        endpoint = `${BASE_URL}/${endpoint}`

        try {
            if (verb == "get") {
                let res = await axios.get(endpoint, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });

                return res;
            } else if (verb == "post") {
                console.log("BookmarkApi - request - post", endpoint);
                let res = await axios.post(endpoint,
                    paramsOrData, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                console.log("BookmarkApi - request - res");

                return res;
            }

            return null;
        } catch (error) {
            // let message = error.response.data.message;
            // console.log("BookmarkApi - request - error", error);
            // throw Array.isArray(message) ? message : [message];
            throw "Nooo";
        }
    }

    static async login(username, password) {
        console.log("BookmarkApi - login");
        const param = {
            username: username,
            password: password
        }
        console.log("BookmarkApi - login - param", param);
        let res = await this.request(`login/`, param, "post");
        console.log("BookmarkApi - login - res", res);

        localStorage.setItem(TOKEN_LOCALSTORAGE, res.data.token);
        localStorage.setItem(USER_NAME, username);

        return username;
    }

    static async register(username, firstName, lastName, email, password, imageUrl) {
        const param = {
            username: username,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            image_url: imageUrl,
        }

        let res = await this.request(`users`, param, "post");

        localStorage.setItem(TOKEN_LOCALSTORAGE, res.data.token);
        localStorage.setItem(USER_NAME, username);

        return username;
    }

    static async getUser() {
        let res = await this.request(`users`, null, "get");
        console.log("Home - getUser - res", res);
        return res.data.user;
    }

    static async getNewsFeed(isPublic) {
        let res = await this.request(`newsfeed?isPublic=${isPublic}`, null, "get");
        console.log("Home - getNewsfeed - res", res);
        return res.data.result;
    }

    static async likesToggleNewsFeedItem(journal) {
        const param = {
            journalId: journal.id
        }
        let res = await this.request(`newsfeed/likesToggle`, param, "post");
        return res.data;
    }

    static async getSearchedBooks(searchParam) {
        console.log("BookMarkApi - getSearchedBooks - searchParam", searchParam);
        let res = await this.request(`books?searchParam=${searchParam}`, null, "get");
        console.log("BookMarkApi - getSearchedBooks - res", res.data);
        return res.data.books;
    }

    static async addBookToShelf(book) {
        const param = {
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
        }
        let res = await this.request(`books/add`, param, "post");

        return res.data.success;
    }

    static async getBooks() {
        let res = await this.request(`books/bookshelf`, null, "get");

        return res.data.users_books;
    }

    static async deleteBook(usersBooksId) {
        const param = {
            usersBooksId: usersBooksId
        }
        let res = await this.request(`books/delete`, param, "post");

        return res.data.success;
    }

    static async getJournal(bookId) {
        let res = await this.request(`journals/?bookId=` + bookId, null, "get");

        return res.data.journal;
    }

    static async editJournal(journalId, isPublic, dateStarted, dateFinished, readingStatus, myRating, bookReview, favoriteQuote, finalThought) {
        console.log("EDIT JOURNAL - start");
        const param = {
            id: journalId,
            is_public: isPublic,
            date_started: dateStarted,
            date_finished: dateFinished,
            reading_status: readingStatus,
            my_rating: myRating,
            book_review: bookReview,
            favorite_quote: favoriteQuote,
            final_thought: finalThought
        }
        let res = await this.request(`journals/edit`, param, "post");

        console.log("EDIT JOURNAL - res.data", res.data);

        return res.data.journal;
    }
}

export default BookmarkApi;