import React, { useState, useContext } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../actions/userActions';
import { useHistory } from "react-router-dom";
import BookmarkApi from "./BookmarkApi";
import './Login.css';
import UserContext from "../UserContext";

function Login() {
    const history = useHistory();
    // const dispatch = useDispatch();
    // const users = useSelector(store => store.users);
    // console.log("LOGIN - users", users);
    // console.log("LOGIN - username", users.username);
    const { setCurrentUserName } = useContext(UserContext);

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
        // let data;
        // let token;

        // try {
        //     data = {
        //         username: formData.username,
        //         password: formData.password
        //     };
        //     token = await BookmarkApi.login(data);
        // } catch (errors) {
        //     return setFormData(data => ({ ...data, errors }));
        // }
        // setToken(token);
        // dispatch(login(formData));
        // history.push("/");

        let username;
        try {
            username = await BookmarkApi.login(formData.username, formData.password);
        } catch (error) {

        }
        console.log("Login Page - username", username);
        // setToken(token);
        setCurrentUserName(username);
        if (username) {
            history.push("/");
        }
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