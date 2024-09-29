import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // To get the passed state
import '../styles/SegmentationPage.css'; // Ensure you have this CSS file

function SegmentationPage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Expecting 'data' to contain the filename and segmentation

    // Extract the filename and segmentation from the data
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Assuming the response has one file
    const segmentationText = data ? data[filename].segmentation : 'No segmentation available';

    // Define the possible segmentation categories
    const segments = {
        heading: segmentationText.match(/### (\d+\..+?)\n/g) || [], // Extracting headings marked with ###
        paragraph: segmentationText.split('\n\n') || [], // Splitting into paragraphs
        section: segmentationText.match(/-\s.+/g) || [], // Sections marked with bullet points (-)
        topic: segmentationText.match(/Topic [A-Z]:.+/g) || [], // Extract topics, if any
        words: segmentationText.match(/\b\w+\b/g) || [], // Splitting into individual words
        lines: segmentationText.split('\n') || [], // Splitting into lines
    };

    const [activeSegment, setActiveSegment] = useState('heading'); // Default to heading

    return (
        <div className="segmentation-page">
            {/* Header */}
            <header className="header">
                <h1>Segmentation</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="segmentation-container">
                    <div className="document-info">
                        <p><strong>Title:</strong> {filename}</p> {/* Display the filename as title */}
                        {/* <input type="text" placeholder="Search Keywords" className="search-input"/> */}
                    </div>

                    <div className="segmentation-output">
                        {/* Segment Options */}
                        <div className="segment-options">
                            {Object.keys(segments).map(segment => (
                                <button
                                    key={segment}
                                    className={`segment-btn ${activeSegment === segment ? 'active' : ''}`}
                                    onClick={() => setActiveSegment(segment)}
                                >
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Segmented Text */}
                        <div className="segmentation-text">
                            {segments[activeSegment].map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>

                        {/* Copy Button */}
                        <button className="copy-btn">Copy</button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 DMOA. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default SegmentationPage;
