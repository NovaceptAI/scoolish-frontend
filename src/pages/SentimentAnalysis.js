import React from 'react';
import { useLocation } from 'react-router-dom'; // To get the passed state
import '../styles/SentimentAnalysisPage.css'; // Ensure you have this CSS file

function SentimentAnalysisPage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Assuming 'data' contains the response
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Extract the filename
    const sentimentAnalysisText = data ? data[filename].sentiment_analysis : 'No sentiment analysis data available';

    // Helper function to format the sentiment analysis text
    const formatSentimentText = (text) => {
        return text.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };

    return (
        <div className="sentiment-analysis-page">
            {/* Header */}
            <header className="header">
                <h1>Sentiment Analysis</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="sentiment-analysis-container">
                    <div className="document-info">
                        <p><strong>Document Title:</strong> {filename}</p> {/* Display the document title */}
                    </div>

                    <div className="sentiment-analysis-section">
                        <h3>Sentiment Breakdown</h3>
                        <div className="sentiment-analysis-text">
                            {/* Render the sentiment analysis text */}
                            {formatSentimentText(sentimentAnalysisText)}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SentimentAnalysisPage;
