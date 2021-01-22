import React from "react";
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { loggedOut } from '../actions/userActions';
import './NavBar.css';

function Navbar() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.users);
    console.log("NAVBAR - user", user);
    console.log("NAVBAR - username", user.username);

    const logout = () => {
        dispatch(loggedOut());
        history.push('/');
    }

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

                {!user.username ?
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">REGISTER</NavLink>
                        </li>
                    </ul>

                    :

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">HI {user.username}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={logout}>LOG OUT</NavLink>
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
