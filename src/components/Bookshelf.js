import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import BookshelfCard from './BookshelfCard';
import BookmarkApi from './BookmarkApi';
import './Bookshelf.css';

function Bookshelf() {
    const [userBooks, setUserBooks] = useState([]);

    useEffect(async function () {
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