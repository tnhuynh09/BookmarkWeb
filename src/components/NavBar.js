import React, { useEffect, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { TOKEN_LOCALSTORAGE, USER_NAME } from "./App.js"
import './NavBar.css';
import UserContext from "../UserContext";
import bookMarkImage from '../images/book_mark_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
    const history = useHistory();
    const { currentUserName, setCurrentUserName } = useContext(UserContext);

    useEffect(function () {
        const userName = localStorage.getItem(USER_NAME);
        setCurrentUserName(userName);
    });

    const logout = () => {
        // dispatch(loggedOut());
        localStorage.clear();
        setCurrentUserName(null);
        // userName = localStorage.getItem(USER_NAME);
        history.push('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark NavBar-wrapper">
            <NavLink className="navbar-brand" exact to="/">
                <img className="NavBar-logo" src={bookMarkImage} />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {!currentUserName ?
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link NavBar-item" to="/login">
                                <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link NavBar-item" to="/register">
                                <FontAwesomeIcon icon={faUserPlus} /> REGISTER
                            </NavLink>
                        </li>
                    </ul>

                    :

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link NavBar-item" to="/profile">
                                <FontAwesomeIcon icon={faUserCircle} /> HI, {currentUserName}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link NavBar-item" to="/bookshelf">
                                <FontAwesomeIcon icon={farBookmark} /> BOOKSHELF
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link NavBar-item" to="/" onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> LOG OUT
                            </NavLink>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    );
}

export default Navbar;