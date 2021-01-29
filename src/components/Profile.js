import React, { useEffect, useContext, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfile } from '../actions/userActions';
import BookmarkApi from './BookmarkApi';
// import { useHistory } from "react-router-dom";
// import './Profile.css';

function Profile() {
    console.log("PROFILE - COMP");
    const [user, setUser] = useState(null);

    useEffect(async function () {
        getUser();
    }, []);

    async function getUser() {
        console.log("Profile - getUser");
        const result = await BookmarkApi.getUser();
        setUser(result);
        console.log("Profile - getUser", result);
    }

    console.log("GETTING THE USERRRNAME =====> ", user);

    return (
        (user) ?
            <div className="Profile">
                <h2>Profile</h2>
                <p>PROFILE IMAGE</p>
                <img src={user.image_url} alt="Girl in a jacket" width="100" height="100"></img>
                <p>{user.username}</p>
                <p>{user.first_name} {user.last_name}</p>
            </div>
            :
            <div></div>

    );
}

export default Profile;