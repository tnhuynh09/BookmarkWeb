// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import { decode } from "jsonwebtoken";
// import useLocalStorage from "../hooks/useLocalStorage";
import NavBar from "./NavBar";
import Routes from "./Routes";
import Footer from "./Footer";
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
import UserContext from "../UserContext";

export const TOKEN_LOCALSTORAGE = "bookmark-token";
export const USER_NAME = "USER_NAME";



function App() {
    // const store = useSelector(store => store);
    // console.log("APP - COMP - store", store);
    const [currentUserName, setCurrentUserName] = useState(null);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ currentUserName, setCurrentUserName }}>
                <div className="App">
                    <NavBar />
                    <div className="Routes">
                        <Routes />
                    </div>
                    <Footer />
                </div>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
