import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
// import { calculateTotalQuantity } from "./helpers";
import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" exact to="/">BOOKMARK LOGO</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">REGISTER</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
