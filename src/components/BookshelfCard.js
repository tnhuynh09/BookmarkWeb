import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
// import { deleteBook } from '../actions/bookActions';
// import { addJournal } from '../actions/journalActions';
import './BookshelfCard.css';
import UserContext from "../UserContext";
import BookmarkApi from './BookmarkApi';

function BookshelfCard({ book, addJournal }) {

    async function handleDeleteBook() {
        console.log("delete --- BTN ON CLICK!");
        console.log("deleteBook --- book", book);
        console.log("deleteBook --- book ID", book.id);
        // dispatch(deleteBook(book.id));
        // history.push("/bookshelf");

        const result = await BookmarkApi.deleteBook(book.id);
        console.log("deleteBook --- book result", result);
        if (result === true) {
            window.history.go(0); // Reload the page
            // history.push("/bookshelf");
        }
    }

    async function handleAddJournal() {
        console.log("addJournal --- BTN ON CLICK!");
        // dispatch(addJournal(book.id));
        // history.push("/journal/add");
        // history.push("/journal/add?journalId=" + book.id);
        // window.location = "/journal/add?bookId=" + book.id;
        window.location = "/journal/add/bookId/" + book.id;
    }

    return (
        (book) ?
            (
                <div className="BookshelfCard-wrapper">
                    <div className="BookshelfCard-top">
                        <img className="BookshelfCard-image" src={book.book_image} alt="" />

                        <div className="BookshelfCard-top-right">
                            <p><strong>Average Rating:</strong> {book.average_rating}</p>
                            <p><strong>Published Date:</strong> {book.published_date}</p>
                            <p><strong>Page Count:</strong> {book.page_count}</p>
                            <p><strong>Publisher:</strong> {book.publisher}</p>
                            <p><strong>ISBN:</strong> {book.isbn}</p>
                        </div>
                    </div>
                    <p className="BookshelfCard-title">{book.title}</p>
                    <p className="BookshelfCard-authors"><strong>Author:</strong> {book.authors}</p>
                    <p className="BookshelfCard-description"><strong>Description:</strong> {book.description}</p>

                    <div className="BookshelfCard-buttons">
                        <button
                            className="BookshelfCard-delete-button"
                            onClick={handleDeleteBook}
                        >
                            Delete Book
                        </button>

                        <button
                            className="BookshelfCard-add-button"
                            onClick={handleAddJournal}
                        >
                            Journal
                        </button>
                    </div>

                    {/* <div class="BookshelfCard-divider"></div> */}
                </div>
            )
            :
            ""
    );
}

export default BookshelfCard;