import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addBookToShelf } from '../actions/bookActions';
// import './BookCard.css';

// function BookCard({ bookImage, title, authors, description, averageRating, publishedDate, publisher, pageCount, isbn }) {

function BookCard({ book }) {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log("BookCard --- book", book);

    function addBook() {
        console.log("addBook --- BTN ON CLICK!");
        // let id = book.googleBookId;
        // console.log("addBook --- id", id);
        // dispatch(addBookToShelf(id));
        console.log("addBook --- book", book);
        dispatch(addBookToShelf(book));
        history.push("/bookshelf");
    }

    return (
        <div className="BookCard py-3">
            {book ?
                (
                    <div>
                        <img src={book.bookImage} alt="" />
                        <p>{book.title}</p>
                        <p>Author: {book.authors}</p>
                        <p>Description: {book.description}</p>
                        <p>Average Rating: {book.averageRating}</p>
                        <p>Published Date {book.publishedDate}</p>
                        <p>Publisher: {book.publisher}</p>
                        <p>Page Count: {book.pageCount}</p>
                        <p>ISBN: {book.isbn}</p>
                        <button
                            className="btn btn-danger btn-lg"
                            onClick={addBook}
                        >
                            Add to bookshelf
                        </button>
                    </div>
                )
                :
                ""
            }
        </div>
    );
}

export default BookCard;