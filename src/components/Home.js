import React, { useEffect, useContext, useState } from 'react';
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import BookmarkApi from './BookmarkApi';
import './Home.css';
import { TOKEN_LOCALSTORAGE } from "./App.js"
import backgroundImage from '../images/home_page_background_2.jpeg';

function Home() {
    const [journals, setJournals] = useState([]);
    const jwtToken = localStorage.getItem(TOKEN_LOCALSTORAGE);
    const bookQuotesArray = [
        "If you don’t like to read, you haven’t found the right book. - J.K. Rowling",
        "The library is inhabited by spirits that come out of the pages at night. - Isabel Allende ",
        "That’s the thing about books. They let you travel without moving your feet. - Jhumpa Lahiri",
        "I have always imagined paradise will be a kind of library. -  Jorge Luis Borges",
        "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one. - George R.R. Martin",
        "Books were my pass to personal freedom. - Oprah Winfrey",
        "A first book has some of the sweetness of a first love. - Robert Aris Willmott",
        "She sounds like someone who spends a lot of time in libraries, which are the best sorts of people. - Catherynne M. Valente",
        "A room without books is like a body without a soul. - Cicero",
        "It is is better to know one book intimately than a hundred superficially. - Donna Tartt",
        "In the end, we’ll all become stories. - Margaret Atwood"
    ]
    const randomIdx = Math.floor(Math.random() * bookQuotesArray.length);
    const randomQuote = bookQuotesArray[randomIdx];

    useEffect(async function () {
        getNewsfeed();

    }, []);

    async function getNewsfeed() {
        const result = await BookmarkApi.getNewsFeed(true);
        setJournals(result);
    }

    return (
        (jwtToken) ?
            <div>
                {journals && journals.length > 0
                    ? (<div className="Home-wrapper">
                        <h2 className="Home-headerTitle">MY NEWSFEED</h2>
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
                    (<div className="Home-wrapper">
                        <h2 className="Home-headerTitle">MY NEWSFEED</h2>

                        <p className="Home-noFeed">There is no newsfeed at the moment</p>
                    </div>)
                }
            </div>
            :
            <div className="Home-wrapper2">
                <img className="Home-wrapper2BackgroundImage" src={backgroundImage} />
                <div className="Home-wrapper2Content">
                    <h1 className="Home-wrapper2ContentTitle">BOOKmark my words</h1>
                    {/* <h3 className="Home-wrapper2ContentSubtitle">This is some profound message that would make everyonw wants to use this website</h3> */}
                    <h2 className="Home-wrapper2ContentSubtitle">{randomQuote}</h2>
                    <a href="/login">
                        <button className="Home-wrapper2ContentButton">
                            GET STARTED
                        </button>
                    </a>

                </div>
            </div>
    );
}

export default Home;