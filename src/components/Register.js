import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BookmarkApi from "./BookmarkApi";
import './Register.css';

function Register({ setToken }) {
    const history = useHistory();
    const initialState = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        profile_image: "",
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
                first_name: formData.first_name || undefined,
                last_name: formData.last_name || undefined,
                username: formData.username,
                email: formData.email || undefined,
                password: formData.password,
                profile_image: formData.email || undefined,
            };
            token = await BookmarkApi.register(data);
        } catch (errors) {
            return setFormData(data => ({ ...data, errors }));
        }

        setToken(token);
        history.push("/");
    }

    return (
        // <div>
        //     <h1>Register</h1>
        //     <form onSubmit={handleSubmit}>
        //         <label htmlFor="first_name">First Name</label>
        //         <input
        //             id="first_name"
        //             type="text"
        //             name="first_name"
        //             value={formData.first_name}
        //             onChange={handleChange}
        //         />

        //         <label htmlFor="last_name">Last Name</label>
        //         <input
        //             id="last_name"
        //             type="text"
        //             name="last_name"
        //             value={formData.last_name}
        //             onChange={handleChange}
        //         />

        //         <label htmlFor="username">Username</label>
        //         <input
        //             id="username"
        //             type="text"
        //             name="username"
        //             value={formData.username}
        //             onChange={handleChange}
        //         />

        //         <label htmlFor="email">Email</label>
        //         <input
        //             id="email"
        //             type="email"
        //             name="email"
        //             value={formData.email}
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

        //         <label htmlFor="profile_image">Upload Image</label>
        //         <input
        //             id="profile_image"
        //             type="text"
        //             name="profile_image"
        //             value={formData.profile_image}
        //             onChange={handleChange}
        //         />

        //         <button type="submit">Submit</button>
        //     </form>

        //     <div>
        //         <p>Already have an account? Login Here</p>
        //     </div>
        // </div>

        <div className="Register-container-main">
            <div className="Register-container">
                <div className="Register-leftSide">
                    <h4 className="Register-leftSide-name">BOOKmarkMyWord</h4>
                </div>
                <div className="Register-rightSide">
                    <h2 className="Register-rightSide-header">Register</h2>
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
                        <input
                            id="profile_image"
                            type="text"
                            name="profile_image"
                            className="Register-rightSide-form-input"
                            placeholder="Profile Image"
                            value={formData.profile_image}
                            onChange={handleChange}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="Register-rightSide-button"
                        />
                    </form>
                    <p>Already have an account? <a href="/login">Login Here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Register;