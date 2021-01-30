import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import BookmarkApi from "./BookmarkApi";
import './JournalForm.css';

function JournalForm({ setToken }) {
    const history = useHistory();
    let { bookId } = useParams();

    const initialState = {
        is_public: null,
        date_started: "",
        date_finished: "",
        reading_status: "",
        my_rating: "",
        book_review: "",
        favorite_quote: "",
        final_thought: "",
        errors: []
    }
    const [formData, setFormData] = useState(initialState);
    const [journalId, setJournalId] = useState(null);

    useEffect(async function () {
        getJournal();
    }, []);

    const handleChange = evt => {
        let { name, value } = evt.target;

        if (name === "is_public") {
            value = evt.target.checked;
        }
        console.log("TIGER - handleChange", name, value);

        setFormData(data => ({
            ...data,
            [name]: value
        }));


    }

    async function getJournal() {
        const result = await BookmarkApi.getJournal(bookId);
        setJournalId(result.journal_id);

        let date_started = null;
        let date_finished = null;
        if (result.date_started) {
            date_started = result.date_started.split("T")[0];
        }
        if (result.date_finished) {
            date_finished = result.date_finished.split("T")[0];
        }

        let rating = result.my_rating + "";

        setFormData({
            is_public: result.is_public,
            date_started: date_started || "",
            date_finished: date_finished || "",
            reading_status: result.reading_status || "",
            my_rating: rating || "5",
            book_review: result.book_review || "",
            favorite_quote: result.favorite_quote || "",
            final_thought: result.final_thought || "",
            errors: []
        });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const rating = parseInt(formData.my_rating);
        const result = await BookmarkApi.editJournal(journalId, formData.is_public, formData.date_started, formData.date_finished, formData.reading_status, rating, formData.book_review, formData.favorite_quote, formData.final_thought);

        let date_started = null;
        let date_finished = null;
        if (result.date_started) {
            date_started = result.date_started.split("T")[0];
        }
        if (result.date_finished) {
            date_finished = result.date_finished.split("T")[0];
        }

        setFormData({
            is_public: result.is_public,
            date_started: date_started || "",
            date_finished: date_finished || "",
            reading_status: result.reading_status || "",
            my_rating: result.my_rating || null,
            book_review: result.book_review || "",
            favorite_quote: result.favorite_quote || "",
            final_thought: result.final_thought || "",
            errors: []
        });
    }

    return (
        <div className="JournalForm-wrapper">
            <h2 className="JournalForm-header">MY JOURNAL</h2>
            <form onSubmit={handleSubmit} className="Register-rightSide-form">
                {formData.is_public == true ?
                    <div className="JournalForm-makePublic">
                        <label className="JournalForm-makePublicTitle">Make This Journal Public?</label>
                        <div className="JournalForm-extender"></div>
                        <input
                            id="is_public"
                            type="checkbox"
                            name="is_public"
                            className="JournalForm-makePublicCheckbox"
                            placeholder="Make Public"
                            checked
                            onChange={handleChange}
                        />
                    </div> :
                    <div className="JournalForm-makePublic">
                        <label className="JournalForm-makePublicTitle">Make This Journal Public?</label>
                        <div className="JournalForm-extender"></div>
                        <input
                            id="is_public"
                            type="checkbox"
                            name="is_public"
                            className="JournalForm-makePublicCheckbox"
                            placeholder="Make Public"
                            onChange={handleChange}
                        />
                    </div>}

                <div className="JournalForm-dateWrapper">
                    <label className="JournalForm-dateTitle">Date Started</label>
                    <div className="JournalForm-extender"></div>
                    <input
                        id="date_started"
                        type="date"
                        name="date_started"
                        className="JournalForm-dateInput"
                        placeholder="Date Started"
                        value={formData.date_started}
                        onChange={handleChange}
                    />
                </div>

                <div className="JournalForm-dateWrapper">
                    <label className="JournalForm-dateTitle">Date Finished</label>
                    <div className="JournalForm-extender"></div>
                    <input
                        id="date_finished"
                        type="date"
                        name="date_finished"
                        className="JournalForm-dateInput"
                        placeholder="Date Finished"
                        value={formData.date_finished}
                        onChange={handleChange}
                    />
                </div>
                <div className="JournalForm-readingStatusWrapper">
                    <label className="JournalForm-readingStatusTitle">Reading Status</label>
                    <div className="JournalForm-extender"></div>
                    <select
                        className="JournalForm-readingStatusSelect"
                        name="reading_status"
                        id="reading_status"
                        onChange={handleChange}
                        value={formData.reading_status}>
                        <option value="reading">reading</option>
                        <option value="finished">finished</option>
                        <option value="will read">will read</option>
                        <option value="abandoned">abandoned</option>
                    </select>
                </div>

                <div className="JournalForm-ratingWrapper">
                    <label className="JournalForm-ratingTitle">My Rating</label>
                    <div className="JournalForm-extender"></div>
                    <select
                        className="JournalForm-ratingSelect"
                        name="my_rating"
                        id="my_rating"
                        onChange={handleChange}
                        value={formData.my_rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <textarea
                    id="book_review"
                    type="text"
                    name="book_review"
                    className="JournalForm-textarea"
                    placeholder="Book Review"
                    value={formData.book_review}
                    onChange={handleChange}
                />
                <textarea
                    id="favorite_quote"
                    type="text"
                    name="favorite_quote"
                    className="JournalForm-textarea"
                    placeholder="Favorite Quote"
                    value={formData.favorite_quote}
                    onChange={handleChange}
                />
                <textarea
                    id="final_thought"
                    type="text"
                    name="final_thought"
                    className="JournalForm-textarea"
                    placeholder="Final Thought"
                    value={formData.final_thought}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="SUBMIT"
                    className="JournalForm-button"
                />
            </form>
        </div>
    );
}

export default JournalForm;