import React from 'react';
import { useHistory } from "react-router-dom";
import BookmarkApi from './BookmarkApi';
import './BookshelfCard.css';


function BookCard({ book }) {
    const history = useHistory();

    async function addBook() {
        const result = await BookmarkApi.addBookToShelf(book);
        if (result === true) {
            history.push("/bookshelf");
        }
    }

    return (
        (book) ?
            (
                <div className="BookshelfCard-wrapper">
                    <div className="BookshelfCard-top">
                        <img className="BookshelfCard-image" src={book.bookImage} alt="" />

                        <div className="BookshelfCard-top-right">
                            <p><strong>Average Rating:</strong> {book.averageRating}</p>
                            <p><strong>Published Date:</strong> {book.publishedDate}</p>
                            <p><strong>Page Count:</strong> {book.pageCount}</p>
                            <p><strong>Publisher:</strong> {book.publisher}</p>
                            <p><strong>ISBN:</strong> {book.isbn}</p>
                        </div>
                    </div>

                    <p className="BookshelfCard-title">{book.title}</p>
                    <p className="BookshelfCard-authors"><strong>Author:</strong> {book.authors}</p>
                    <p className="BookshelfCard-description"><strong>Description:</strong> {book.description}</p>

                    <div className="BookshelfCard-buttons">
                        <button
                            className="BookshelfCard-add-button"
                            onClick={addBook}
                        >
                            ADD TO BOOKSHELF
                        </button>
                    </div>

                    {/* <div class="BookshelfCard-divider"></div> */}
                </div>
            )
            :
            ""
    );
}

export default BookCard;