import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/EntityResolutionPage.css'; // Ensure this CSS file exists

function EntityResolutionPage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Assuming 'data' contains the response
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Get the filename
    const entityResolutionText = data ? data[filename].entity_resolution : 'No entity resolution data available';

    // Helper function to format the entity resolution text
    const formatEntityResolutionText = (text) => {
        return text.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };

    return (
        <div className="entity-resolution-page">
            <header className="header">
                <h1>Entity Resolution</h1>
            </header>

            <main className="content">
                <div className="document-section">
                    <p><strong>Document Title:</strong> {filename}</p>
                </div>

                <div className="entities-section">
                    <h3>Resolved Entities</h3>
                    <div className="entity-resolution-text">
                        {/* Render the entity resolution text */}
                        {formatEntityResolutionText(entityResolutionText)}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default EntityResolutionPage;
