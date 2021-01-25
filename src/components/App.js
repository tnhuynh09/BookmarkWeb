// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import { decode } from "jsonwebtoken";
// import useLocalStorage from "../hooks/useLocalStorage";
import NavBar from "./NavBar";
import Routes from "./Routes";
import Footer from "./Footer";
import './App.css';

export const TOKEN_LOCALSTORAGE = "bookmark-token";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="Routes">
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
