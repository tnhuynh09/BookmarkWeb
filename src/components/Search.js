import React, { useState } from "react";
import BookCard from './BookCard'
import BookmarkApi from "./BookmarkApi";
import './Search.css';

function Search() {
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
        const result = await BookmarkApi.getSearchedBooks(formData.search_query);
        setBooklist(result);
    }

    return (
        <div className="Search-wrapper">
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
                    value="SUBMIT"
                    className="Search-button"
                />
            </form>
            <div>
                {booklist && booklist.length > 0
                    ? (<div className="Search-result-container">
                        <p className="Search-result-header">SEARCH RESULT</p>
                        {booklist.map(book => <BookCard
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