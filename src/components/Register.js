import React, { useState, useContext } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Register.css';
import UserContext from "../UserContext";
import BookmarkApi from "./BookmarkApi";
import backgroundImage from '../images/register_image.jpeg';
import Alert from "./Alert";

function Register({ setToken }) {
    const history = useHistory();
    const { setCurrentUserName } = useContext(UserContext);
    const initialState = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        // profile_image: "",
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
        //         first_name: formData.first_name || undefined,
        //         last_name: formData.last_name || undefined,
        //         username: formData.username,
        //         email: formData.email || undefined,
        //         password: formData.password,
        //         profile_image: formData.email || undefined,
        //     };
        //     token = await BookmarkApi.register(data);
        // } catch (errors) {
        //     return setFormData(data => ({ ...data, errors }));
        // }
        // setToken(token);

        // dispatch(registerUser(formData));

        let username;
        try {
            username = await BookmarkApi.register(formData.username, formData.first_name, formData.last_name, formData.email, formData.password, "");
        } catch (errors) {
            return setFormData(data => ({ ...data, errors }));
        }

        setCurrentUserName(username);
        if (username) {
            history.push("/");
        }

        // const username = await BookmarkApi.register(formData.username, formData.first_name, formData.last_name, formData.email, formData.password, "");

        // setCurrentUserName(username);
        // if (username) {
        //     history.push("/");
        // }
    }

    console.log("REGISTER - COMP - ERRORS - formData", formData.errors);

    return (
        <div className="Register-container-main">
            <div className="Register-container">
                <div className="Register-leftSide">
                    <img className="Register-image" src={backgroundImage} />
                </div>
                <div className="Register-rightSide">
                    <h2 className="Register-rightSide-header">REGISTER</h2>
                    <form onSubmit={handleSubmit} className="Register-rightSide-form">
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            className="Register-rightSide-form-input"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <input
                            id="last_name"
                            type="text"
                            name="last_name"
                            className="Register-rightSide-form-input"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        <input
                            id="username"
                            type="text"
                            name="username"
                            className="Register-rightSide-form-input"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="Register-rightSide-form-input"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="Register-rightSide-form-input"
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
                            className="Register-rightSide-button"
                        />
                    </form>
                    <p class="Register-login">Already have an account? <a href="/login">Login Here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Register;