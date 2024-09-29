import React from 'react';
import { useLocation } from 'react-router-dom'; // To get the passed state
import '../styles/TranslationPage.css'; // Ensure you have this CSS file

function TranslationPage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Assuming 'data' contains the response
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Get the filename
    const translationText = data ? data[filename].translation : 'No translation available'; // Get the translation text

    return (
        <div className="translation-page">
            {/* Header */}
            <header className="translationheader">
                <h1>Translation</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="translation-container">
                    {/* Source Language and Content */}
                    <div className="source-content">
                        <div className="language-indicator">
                            <h3>Source Language</h3>
                        </div>
                        {/* Placeholder for original content */}
                        <div className="file-preview">
                            <p><strong>Document Title:</strong> {filename}</p>
                        </div>
                    </div>

                    {/* Translated Language and Content */}
                    <div className="translated-content">
                        <div className="language-indicator">
                            <h3>Converted Language</h3>
                        </div>
                        <div className="translated-text">
                            <p>{translationText}</p>
                            <button className="copy-btn">Copy Translated Text</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TranslationPage;
