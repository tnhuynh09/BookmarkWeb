import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfile } from '../actions/userActions';
import { Link } from "react-router-dom";
// import './Bookshelf.css';

function Bookshelf() {
    const dispatch = useDispatch();
    const books = useSelector(store => store);
    console.log("BOOKSHELF - COMP - books", books);

    return (
        <div className="Bookshelf">
            <h2>Bookshelf</h2>
            <Link to="/search">
                <button>+ ADD BOOK</button>
            </Link>
            <div className="Bookshelf-books-list">

            </div>
        </div>
    );
}

export default Bookshelf;