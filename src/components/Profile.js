import React, { useEffect, useContext, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfile } from '../actions/userActions';
import BookmarkApi from './BookmarkApi';
// import { useHistory } from "react-router-dom";
import profileImage from '../images/profile_image_placeholder.png';
import './Profile.css';

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
    let userImage;
    if (userImage) {
        userImage = user.image_url;
    } else {
        userImage = profileImage;
    }
    // console.log("GETTING THE USER IMAGE =====> ", user.image_url);

    return (
        (user) ?
            <div className="Profile">
                <div className="Profile-wrapper">
                    <h2 className="Profile-header">PROFILE</h2>
                    {/* <img className="Profile-profileImage" src={user.image_url} alt="Girl in a jacket" width="100" height="100"></img> */}
                    <img className="Profile-profileImage" src={profileImage} alt="Girl in a jacket" width="100" height="100"></img>
                    <p className="Profile-profileInfo">{user.username}</p>
                    <p className="Profile-profileInfo">{user.first_name} {user.last_name}</p>
                </div>
            </div>
            :
            <div></div>

    );
}

export default Profile;