// import logo from './logo.svg';
import React from "react";
import NavBar from "./NavBar";
import Routes from "./Routes";
import Footer from "./Footer";
import useLocalStorage from "../hooks/useLocalStorage";
import './App.css';

export const TOKEN_LOCALSTORAGE = "bookmark-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_LOCALSTORAGE);

  return (
    <div className="App">
      <NavBar />
      <div className="Routes">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
