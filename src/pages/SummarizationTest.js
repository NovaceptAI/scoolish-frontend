import React from 'react';
import { useLocation } from 'react-router-dom'; // To get the passed state

function SummarizationPage() {
    const location = useLocation();
    const { results } = location.state || {}; // The entire response passed as 'results'

    // Log the results to ensure it's what you expect
    console.log('Results:', results);

    return (
        <div className="summarization-page">
            <header className="summarizationheader">
                <h1>Summarization Results</h1>
            </header>

            <main className="content">
                <div className="summarization-container">
                    {/* Loop over the results and display each file's summarization */}
                    {Object.keys(results).map((filename, index) => (
                        <div key={index} className="document-info">
                            <h2>File: {filename}</h2>
                            <p>Summarization: {results[filename].summarization}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default SummarizationPage;
