import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../actions/bookActions';
// import { useHistory } from "react-router-dom";
import BookCard from './BookCard'
// import './Search.css';

function Search() {
    const dispatch = useDispatch();
    const booklist = useSelector(store => store.books);

    console.log("BOOKSSSS ARRRAYYYY ----- MERP", booklist.books);
    console.log("BOOKSSSS ARRRAYYYY ----- TYPE OF", typeof booklist.books);
    const initialState = {
        search_query: "",
        errors: []
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        dispatch(getBooks(formData));
    }

    return (
        <div className="Search">
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <input
                    id="search_query"
                    type="text"
                    name="search_query"
                    className=""
                    placeholder="Search for book..."
                    value={formData.search_query}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className=""
                />
            </form>
            <div className="Search-result-container">
                {booklist && booklist.books.length !== 0
                    ? (<div>
                        <p>Search Result</p>
                        {booklist.books.map(book => <BookCard
                            // bookImage={book.bookImage}
                            // title={book.title}
                            // authors={book.authors}
                            // description={book.description}
                            // averageRating={book.averageRating}
                            // publishedDate={book.publishedDate}
                            // publisher={book.publisher}
                            // pageCount={book.pageCount}
                            // isbn={book.isbn}
                            book={book}
                        />)}
                    </div>) :
                    <p>There are no result for: {formData.search_query}</p>
                }
            </div>
        </div>
    );
}

export default Search;