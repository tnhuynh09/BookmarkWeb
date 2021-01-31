import React, { useEffect, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { loggedOut } from '../actions/userActions';
import { TOKEN_LOCALSTORAGE, USER_NAME } from "./App.js"
import './NavBar.css';
import UserContext from "../UserContext";
// import bookMarkImage from "../images/book";
import bookMarkImage from '../images/book_mark_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
    const history = useHistory();
    // const dispatch = useDispatch();
    // const user = useSelector(store => store.users);
    // console.log("NAVBAR - user", user);
    // console.log("NAVBAR - username", user.username);
    const { currentUserName, setCurrentUserName } = useContext(UserContext);
    // let userName = localStorage.getItem(USER_NAME);

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
        // navbar-light 
        // <nav className="navbar navbar-expand-lg navbar-dark NavBar-wrapper">
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

    // return (
    //     <div className="shadow-lg bg-transparent">
    //         <Navbar variant="light" bg="light">
    //             <Navbar.Brand href="/">Adventure Montana</Navbar.Brand>
    //             <Nav.Link as={Link} to="/">Home</Nav.Link>
    //             <Nav.Link as={Link} to="/adventures">Adventures</Nav.Link>
    //             {users.username ? <Nav.Link as={Link} to="/adventures/add">Add an Adventure</Nav.Link> : null}
    //             {users.username ? null : <Nav.Link as={Link} to="/users/new">Register</Nav.Link>}
    //             {users.username ? <Nav.Link as={Link} to="#" onClick={logout}>{`Logout (${users.username})`}</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
    //         </Navbar>
    //     </div>
    // )
}

export default Navbar;

// const Navbar = ({ navbar }) => {
//     console.log("TIGER - navbar", navbar.user);

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <NavLink className="navbar-brand" exact to="/">BOOKMARK LOGO</NavLink>
//             <button className="navbar-toggler" type="button" data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent" aria-expanded="false"
//                 aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon" />
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/login">LOGIN</NavLink>
//                     </li>
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/register">REGISTER</NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );

//     // return (
//     //     <div className="shadow-lg bg-transparent">
//     //         <Navbar variant="light" bg="light">
//     //             <Navbar.Brand href="/">Adventure Montana</Navbar.Brand>
//     //             <Nav.Link as={Link} to="/">Home</Nav.Link>
//     //             <Nav.Link as={Link} to="/adventures">Adventures</Nav.Link>
//     //             {users.username ? <Nav.Link as={Link} to="/adventures/add">Add an Adventure</Nav.Link> : null}
//     //             {users.username ? null : <Nav.Link as={Link} to="/users/new">Register</Nav.Link>}
//     //             {users.username ? <Nav.Link as={Link} to="#" onClick={logout}>{`Logout (${users.username})`}</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
//     //         </Navbar>
//     //     </div>
//     // )
// };


// const mapStateToProps = (state) => {
//     console.log("TIGER - mapStateToProps", state);
//     const navbar = { user: state.users };
//     return { navbar };
// };

// export default connect(mapStateToProps, null)(Navbar);
