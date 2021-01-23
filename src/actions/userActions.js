import axios from 'axios';
import { REGISTER_USER, LOGGED_IN, LOGGED_OUT, GET_PROFILE } from "./actionTypes";
import { TOKEN_LOCALSTORAGE } from "../components/App.js";
import useLocalStorage from "../hooks/useLocalStorage";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

function login(data) {
    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/login/`, {
            username: data.username,
            password: data.password
        });

        let user = {
            username: data.username,
            token: res.data.token
        }

        // window.localStorage.setItem('bookmark-token', JSON.stringify(user));

        // const parseLocalStorageBookmark = JSON.parse(window.localStorage.getItem('bookmark-token'));
        // console.log("LOGIN ---- parseLocalStorageBookmark", parseLocalStorageBookmark.username);
        dispatch(loggedIn(user));
    }
}

function loggedIn(user) {
    console.log("userActions - loggedIn - user", user);
    return { type: LOGGED_IN, payload: user };
}

function loggedOut() {
    return { type: LOGGED_OUT };
}

function registerUser(data) {
    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/users`, {
            username: data.username,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            image_url: data.image_url,
        });

        let user = {
            username: data.username,
            token: res.data.token
        }

        dispatch(registeredUser(user));
    }
}

function registeredUser(user) {
    return { type: REGISTER_USER, payload: user };
}

function getUserProfile(data) {
    console.log("DATA", data);
    console.log("USERNAME", data.username);
    console.log("TOKEN", data.token);
    // axios.defaults.headers.common[Authorization] = 'Bearer ' + data.token;

    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/users/${data.username}`, {
            headers: {
                Authorization: 'Bearer ' + data.token
            }
        });

        console.log("getUserProfile - res", res);

        let user = {
            username: data.username,
            first_name: res.data.user.first_name,
            token: data.token
        }

        dispatch(getProfile(user));
    }
}

function getProfile(user) {
    return { type: GET_PROFILE, payload: user };
}

export { login, loggedOut, registerUser, getUserProfile }