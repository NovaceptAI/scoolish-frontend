import React from 'react';
import { useLocation } from 'react-router-dom'; // To get the passed state
import '../styles/ChronologyPage.css'; // Ensure you have this CSS file

function ChronologyPage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Assuming 'data' contains the response
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Extract the filename
    const chronologyText = data ? data[filename].chronology : 'No chronology data available';

    // Helper function to format the chronology text into paragraphs
    const formatChronologyText = (text) => {
        return text.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };

    return (
        <div className="chronology-page">
            {/* Header */}
            <header className="header">
                <h1>Chronology of Events</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="chronology-container">
                    <div className="document-info">
                        <p><strong>Document Title:</strong> {filename}</p> {/* Display the document title */}
                    </div>

                    <div className="chronology-events">
                        <h3>Events in Chronological Order</h3>
                        <div className="chronology-text">
                            {/* Render the formatted chronology text */}
                            {formatChronologyText(chronologyText)}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ChronologyPage;
