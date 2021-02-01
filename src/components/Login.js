import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import BookmarkApi from "./BookmarkApi";
import UserContext from "../UserContext";
import backgroundImage from '../images/login_image.jpeg';
import Alert from "./Alert";
import './Login.css';

function Login() {
    const history = useHistory();
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
        let username;

        try {
            username = await BookmarkApi.login(formData.username, formData.password);
        } catch (errors) {
            return setFormData(data => ({ ...data, errors }));
        }

        setCurrentUserName(username);
        if (username) {
            history.push("/");
        }
    }

    return (
        <div className="Login-container-main">
            <div className="Login-container">
                <div className="Login-leftSide">
                    {/* <h4 className="Login-leftSide-name">BOOKmarkMyWord</h4> */}
                    <img className="Login-image" src={backgroundImage} />
                </div>
                <div className="Login-rightSide">
                    <h2 className="Login-rightSide-header">LOG IN</h2>
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

                        {formData.errors.length ? (
                            <Alert type={"Alert-danger"} messages={formData.errors} />
                        ) : null}

                        <input
                            type="submit"
                            value="Submit"
                            className="Login-rightSide-button"
                        />
                    </form>
                    <p class="Login-register">Don't have an account? <a href="/register">Register Here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;