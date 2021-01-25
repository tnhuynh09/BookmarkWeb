import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';
// import { useHistory } from "react-router-dom";
// import './Profile.css';

function Profile() {
    console.log("PROFILE - COMP");
    const dispatch = useDispatch();
    const user = useSelector(store => store.users);
    console.log("PROFILE - user", user);
    dispatch(getUserProfile(user));
    console.log("PROFILE - user - FIRST NAME", user.first_name);

    return (
        <div className="Profile">
            <h2>Profile</h2>
            <p>PROFILE IMAGE</p>
            <p>{user.first_name}</p>
        </div>
    );
}

export default Profile;