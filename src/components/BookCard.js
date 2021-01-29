import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addBookToShelf } from '../actions/bookActions';
import BookmarkApi from './BookmarkApi';
import './BookshelfCard.css';

// function BookCard({ bookImage, title, authors, description, averageRating, publishedDate, publisher, pageCount, isbn }) {

function BookCard({ book }) {
    const history = useHistory();
    // const dispatch = useDispatch();
    // const bookReducer = useSelector(store => store.books.books);
    // console.log("BookCard --- bookReducer", bookReducer);
    // let isBookAdded = false;

    useEffect(function () {
        console.log("addBook --- useEffect");
        // if (bookReducer) {
        //     history.push("/bookshelf");
        // }
        // test();
    });

    async function addBook() {
        console.log("addBook --- BTN ON CLICK!");
        // let id = book.googleBookId;
        // console.log("addBook --- id", id);
        // dispatch(addBookToShelf(id));
        console.log("addBook --- book", book);
        // const test = await dispatch(addBookToShelf(book));
        // history.push("/bookshelf");
        // console.log("addBook --- test", test);

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
                            Add to Booksehf
                        </button>
                    </div>

                    {/* <div class="BookshelfCard-divider"></div> */}
                </div>
            )
            :
            ""
    );

    // return (
    //     <div className="BookCard py-3">
    //         {book ?
    //             (
    //                 <div>
    //                     <img src={book.bookImage} alt="" />
    //                     <p>{book.title}</p>
    //                     <p>Author: {book.authors}</p>
    //                     <p>Description: {book.description}</p>
    //                     <p>Average Rating: {book.averageRating}</p>
    //                     <p>Published Date {book.publishedDate}</p>
    //                     <p>Publisher: {book.publisher}</p>
    //                     <p>Page Count: {book.pageCount}</p>
    //                     <p>ISBN: {book.isbn}</p>
    //                     <button
    //                         className="btn btn-danger btn-lg"
    //                         onClick={addBook}
    //                     >
    //                         Add to bookshelf
    //                     </button>
    //                 </div>
    //             )
    //             :
    //             ""
    //         }
    //     </div>
    // );
}

export default BookCard;