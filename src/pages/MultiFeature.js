import React from 'react';
import { useLocation } from 'react-router-dom'; // To get the passed state
import '../styles/MultiFeaturePage.css'; // Ensure you have this CSS file

function MultiFeaturePage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Assuming 'data' contains the response from multiple features
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Extract the filename
    const featureData = data ? data[filename] : {}; // Extract the feature data for the filename

    // Helper function to display a feature if it exists
    const displayFeature = (featureName, featureContent) => {
        return (
            <div className="feature-section">
                <h3>{featureName}</h3>
                <p>{featureContent}</p>
            </div>
        );
    };

    return (
        <div className="multi-feature-page">
            {/* Header */}
            <header className="header">
                <h1>Analysis Results for {filename}</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="multi-feature-container">
                    {featureData.similarity && displayFeature("Similarity", featureData.similarity)}
                    {featureData.summarization && displayFeature("Summarization", featureData.summarization)}
                    {/* Add more features if needed */}
                    {featureData.translation && displayFeature("Translation", featureData.translation)}
                    {featureData.entity_resolution && displayFeature("Entity Resolution", featureData.entity_resolution)}
                    {featureData.sentiment_analysis && displayFeature("Sentiment Analysis", featureData.sentiment_analysis)}
                    {featureData.chronology && displayFeature("Chronology", featureData.chronology)}

                    {/* If no features are available */}
                    {Object.keys(featureData).length === 0 && (
                        <p>No features found for this document.</p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 My Company. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default MultiFeaturePage;
