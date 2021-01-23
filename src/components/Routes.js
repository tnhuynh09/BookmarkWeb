import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Bookshelf from "./Bookshelf";
import Search from "./Search";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/bookshelf">
                <Bookshelf />
            </Route>
            <Route exact path="/search">
                <Search />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;
