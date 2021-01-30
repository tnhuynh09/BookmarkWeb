import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../actions/bookActions';
import { Link } from "react-router-dom";
import BookshelfCard from './BookshelfCard'
import './Bookshelf.css';
import UserContext from "../UserContext";
import BookmarkApi from './BookmarkApi';

function Bookshelf() {
    // const dispatch = useDispatch();

    // const users_books = useSelector(store => store.books.users_books);
    // console.log("BOOKSHELF - COMP - users_books", users_books);
    const [userBooks, setUserBooks] = useState([]);
    // const { journalBookId, setJournalBookId } = useContext(UserContext);

    useEffect(async function () {
        // console.log("TIGER ---- useEffect 1 getBooks", users_books);
        // if (!users_books) {
        //     // dispatch(getBooks());
        //     // console.log("TIGER - useEffect 2 getBooks", users_books);
        // }
        // dispatch(getBooks());
        // test();
        getBooks();

    }, []);

    async function getBooks() {
        console.log("BookShelf - getBooks");
        const result = await BookmarkApi.getBooks();
        setUserBooks(result);
        console.log("BookShelf - getBooks - userBooks", userBooks);
    }

    function addJournal() {
        // history.push("/journal/add?journalId=" + bookId);
        // setJournalBookId(bookId);
        // window.location = "/journal/add?bookId=" + bookId;
        // console.log("BookShelf - addJournal " + bookId);

    }

    return (
        <div className="Bookshelf-wrapper">
            <div className="Bookshelf-header">
                <h2 className="Bookshelf-headerTitle">MY BOOKSHELF</h2>
                <Link to="/search">
                    <button className="Bookshelf-addBook">+ ADD BOOK</button>
                </Link>
            </div>
            <div className="Bookshelf-divider"></div>
            {/* <button onClick={test}>Test</button> */}
            <div className="Bookshelf-books-list">
                {userBooks
                    ? (<div>
                        {userBooks.map(book => <BookshelfCard
                            book={book}
                            addJournal={addJournal}
                        />)}
                    </div>) :
                    <p>There are no saved books</p>
                }
            </div>
        </div>
    );
}

export default Bookshelf;