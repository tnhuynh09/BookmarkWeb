import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BookmarkApi from "./BookmarkApi";
import './Login.css';

function Login({ setToken }) {
    const history = useHistory();
    const initialState = {
        username: "",
        password: "",
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
        let data;
        let token;

        try {
            data = {
                username: formData.username,
                password: formData.password
            };
            token = await BookmarkApi.login(data);
        } catch (errors) {
            return setFormData(data => ({ ...data, errors }));
        }
        setToken(token);
        history.push("/");
    }

    return (
        // <div>
        //     <h1>Log In</h1>
        //     <form onSubmit={handleSubmit}>
        //         <label htmlFor="username">Username</label>
        //         <input
        //             id="username"
        //             type="text"
        //             name="username"
        //             value={formData.username}
        //             onChange={handleChange}
        //         />

        //         <label htmlFor="password">Password</label>
        //         <input
        //             id="password"
        //             type="password"
        //             name="password"
        //             value={formData.password}
        //             onChange={handleChange}
        //         />

        //         <button type="submit">Submit</button>
        //     </form>

        //     <div>
        //         <p>Don't have an account? Register Here</p>
        //     </div>

        // </div>

        <div className="Login-container-main">
            <div className="Login-container">
                <div className="Login-leftSide">
                    <h4 className="Login-leftSide-name">BOOKmarkMyWord</h4>
                </div>
                <div className="Login-rightSide">
                    <h2 className="Login-rightSide-header">Log In</h2>
                    <form onSubmit={handleSubmit} className="Login-rightSide-form">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="Login-rightSide-form-input"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="Login-rightSide-form-input"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="Login-rightSide-button"
                        />
                    </form>
                    <p>Don't have an account? <a href="/register">Register Here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;