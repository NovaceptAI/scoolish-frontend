import React, { useState } from 'react';
import '../styles/HistoricalTimelineBuilder.css';

const HistoricalTimelineBuilder = () => {
    const [events, setEvents] = useState([]);
    const [eventInput, setEventInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [timelineName, setTimelineName] = useState('');

    const handleAddEvent = () => {
        if (eventInput && dateInput) {
            setEvents([...events, { event: eventInput, date: dateInput }]);
            setEventInput('');
            setDateInput('');
        }
    };

    const handleTimelineNameChange = (e) => {
        setTimelineName(e.target.value);
    };

    const handleEventChange = (e) => {
        setEventInput(e.target.value);
    };

    const handleDateChange = (e) => {
        setDateInput(e.target.value);
    };

    return (
        <div className="timeline-builder-container">
            <header>
                <h1>Historical Timeline Builder</h1>
            </header>

            <div className="timeline-name-input">
                <label>Timeline Name: </label>
                <input
                    type="text"
                    placeholder="Enter the name of your timeline"
                    value={timelineName}
                    onChange={handleTimelineNameChange}
                />
            </div>

            <div className="event-inputs">
                <label>Event: </label>
                <input
                    type="text"
                    placeholder="Enter historical event"
                    value={eventInput}
                    onChange={handleEventChange}
                />
                <label>Date: </label>
                <input
                    type="date"
                    value={dateInput}
                    onChange={handleDateChange}
                />
                <button onClick={handleAddEvent}>Add Event</button>
            </div>

            <div className="timeline-preview">
                <h2>{timelineName || 'Your Timeline'}</h2>
                <ul>
                    {events
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .map((event, index) => (
                            <li key={index}>
                                <strong>{event.date}</strong> - {event.event}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default HistoricalTimelineBuilder;
