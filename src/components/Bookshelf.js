import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';
import { Link, useHistory } from "react-router-dom";
// import './Bookshelf.css';

function Bookshelf() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.users);

    return (
        <div className="Bookshelf">
            <h2>Bookshelf</h2>
            <Link to="/search">
                <button>+ ADD BOOK</button>
            </Link>
        </div>
    );
}

export default Bookshelf;