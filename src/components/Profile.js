import React, { useEffect, useState } from 'react';
import BookmarkApi from './BookmarkApi';
import profileImage from '../images/profile_image_placeholder.png';
import './Profile.css';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(async function () {
        getUser();
    }, []);

    async function getUser() {
        const result = await BookmarkApi.getUser();
        setUser(result);
    }

    let userImage;
    if (userImage) {
        userImage = user.image_url;
    } else {
        userImage = profileImage;
    }

    return (
        (user) ?
            <div className="Profile">
                <div className="Profile-wrapper">
                    <h2 className="Profile-header">PROFILE</h2>
                    <img className="Profile-profileImage" src={profileImage} alt="profile-image" width="100" height="100"></img>
                    <p className="Profile-profileInfo">{user.username}</p>
                    <p className="Profile-profileInfo">{user.first_name} {user.last_name}</p>
                </div>
            </div>
            :
            <div></div>

    );
}

export default Profile;