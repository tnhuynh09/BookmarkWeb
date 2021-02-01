import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";
import Footer from "./Footer";
import UserContext from "../UserContext";

import './App.css';

export const TOKEN_LOCALSTORAGE = "bookmark-token";
export const USER_NAME = "USER_NAME";


function App() {
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
