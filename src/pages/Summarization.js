import React from 'react';
import { useLocation } from 'react-router-dom'; // To get the passed state
import '../styles/SummarizationPage.css'; // Ensure you have this CSS file

function SummarizationPage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Expecting 'results' to contain the filename and summarization

    // Extract the filename and summarization from the results
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Assuming the response has one file
    const summarizationText = data ? data[filename].summarization : 'No summarization available';
    // Print the extracted values to the console
    console.log('Filename:', filename);
    console.log('Summarization Text:', summarizationText);
    
    return (
        <div className="summarization-page">
            {/* Header */}
            <header className="summarizationheader">
                <h1>Summarization</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="summarization-container">
                    <div className="document-info">
                        <p><strong>Title:</strong> {filename}</p> {/* Display the filename as title */}
                        <p><strong>Next feature:</strong> Segmentation</p>
                        <input type="text" placeholder="Search Keywords" className="search-input"/>
                    </div>

                    <div className="summarization-text">
                        <h2>Summarization</h2>
                        <p>
                            {summarizationText}
                        </p>
                        <button className="copy-btn">Copy</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SummarizationPage;
