import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';
import { useHistory } from "react-router-dom";
// import './Search.css';

function Search() {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);

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

        // dispatch(registerUser(formData));
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
        </div>
    );
}

export default Search;