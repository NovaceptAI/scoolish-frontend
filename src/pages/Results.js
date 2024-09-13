import React from 'react';
import '../styles/Results.css';  // Importing the CSS

function Results({ results }) {
    return (
        <div>
            <h1>Document Analysis Results</h1>
            <div className="results-container">
                {Object.entries(results).map(([documentName, features]) => (
                    <div key={documentName}>
                        <h2>Results for Document: {documentName}</h2>
                        {Object.entries(features).map(([feature, result]) => (
                            <div key={feature} className="result-section">
                                <h3>{feature.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                                <pre>{result}</pre>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Results;
