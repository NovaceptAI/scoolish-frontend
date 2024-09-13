import React, { useState } from 'react';
import '../styles/ChronologyPage.css'; // Assuming this CSS file exists

function ChronologyPage() {
    // Dummy data for events in the document
    const events = [
        { date: "12th Jan 2000", event: "Company founded", page: 2 },
        { date: "15th Mar 2005", event: "First product launched", page: 5 },
        { date: "21st Sep 2010", event: "Expanded to new markets", page: 8 },
        { date: "10th Nov 2015", event: "Major acquisition", page: 12 },
        { date: "30th Jun 2020", event: "Global reach achieved", page: 20 }
    ];

    return (
        <div className="chronology-page">
            <div className="document-section">
                <img src="/static/test_23.jpg" alt="Document Preview" />
                <p>Document: Annual Report</p>
            </div>
            <div className="events-timeline">
                <h3>Chronology of Events</h3>
                {events.map((event, index) => (
                    <div key={index} className="event-item">
                        <p><strong>{event.date}</strong> - {event.event}</p>
                        <p>Page: {event.page}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChronologyPage;
