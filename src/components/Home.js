import React, { useEffect, useContext, useState } from 'react';
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import BookmarkApi from './BookmarkApi';
import './Home.css';

function Home() {
    const [journals, setJournals] = useState([]);

    useEffect(async function () {
        getNewsfeed();

    }, []);

    async function getNewsfeed() {
        console.log("Home - getNewsfeed");
        const result = await BookmarkApi.getNewsFeed(true);
        setJournals(result);
        console.log("Home - getNewsfeed - result", result);
    }

    return (
        <div>
            {journals && journals.length > 0
                ? (<div className="Home-wrapper">
                    {journals.map(journal =>
                        <div className="Home-newsfeedCard">
                            <div className="Home-newsfeedCardTop">
                                <img className="Home-newsfeedCardImage" src={journal.book_image} alt="" />

                                <div className="Home-newsfeedCardTopRight">
                                    <label className="Home-newsfeedCardTopRightTitle"><strong>Title: </strong>{journal.title}</label>
                                    <label className="Home-newsfeedCardTopRightAuthors"><strong>Authors: </strong>{journal.authors}</label>
                                    <label className="Home-newsfeedCardTopRightReader"><strong>Reader: </strong>{journal.username}</label>
                                    <label className="Home-newsfeedCardTopRightRating"><strong>Reader's Rating: </strong>{journal.my_rating} / 5</label>
                                </div>
                            </div>
                            {/* <label><strong>Date Started: </strong>{journal.date_started}</label>
                            <label><strong>Date Finished: </strong>{journal.date_finished}</label> */}
                            <label><strong>Review: </strong>{journal.book_review}</label>
                            <label><strong>Favorite Quote: </strong>{journal.favorite_quote}</label>
                            <label><strong>Final Thought: </strong>{journal.final_thought}</label>
                        </div>
                    )}
                </div>) :
                <p>There is no newsfeed</p>
            }
        </div>
    );
}

export default Home;