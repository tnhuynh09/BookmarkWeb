import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { getSearchedBooks } from '../actions/bookActions';
// import { useHistory } from "react-router-dom";
import BookCard from './BookCard'
import BookmarkApi from "./BookmarkApi";
import './Search.css';

function Search() {
    // const dispatch = useDispatch();
    // const booklist = useSelector(store => store.books);

    // console.log("SEARCH COMP - booklist", booklist);
    const [booklist, setBooklist] = useState([]);

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
        // dispatch(getSearchedBooks(formData));

        console.log("Search - handleSubmit");
        const result = await BookmarkApi.getSearchedBooks(formData.search_query);
        console.log("Search - handleSubmit - result", result);
        setBooklist(result);
    }

    return (
        <div className="Search-wrapper">
            {/* <h2>Search</h2> */}
            <form className="Search-searchBar" onSubmit={handleSubmit}>
                <input
                    id="search_query"
                    type="text"
                    name="search_query"
                    className="Search-input"
                    placeholder="Search for book..."
                    value={formData.search_query}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="Search-button"
                />
            </form>
            <div>
                {booklist && booklist.length > 0
                    ? (<div className="Search-result-container">
                        <p className="Search-result-header">Search Result: {booklist.length}</p>
                        {booklist.map(book => <BookCard
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
                    <p className="Search-result-no-results">There is currently no results.</p>
                }
            </div>
        </div>
    );
}

export default Search;