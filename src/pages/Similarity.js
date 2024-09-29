import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SimilarityPage.css'; // Ensure this CSS file exists for styling

function SimilarityPage() {
    const location = useLocation();

    // Extract the data from the state passed from the previous page
    const { data } = location.state || {}; // Assuming 'data' contains the response
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Extracting the filename
    let similarityText = data ? data[filename].similarity : 'No similarity data available'; // Extracting the similarity text

    // Function to format and segregate the similarity text
    const formatSimilarityText = (text) => {
        return text
            .replace(/\n\n### (.*?)/g, '<h3>$1</h3>') // Convert headings (###) to <h3> tags
            .replace(/\n(\d+)\.\s(.*?)/g, '<p><strong>$1.</strong> $2</p>') // Numbered points
            .replace(/-\s(.*?)/g, '<li>$1</li>'); // Bullet points
    };

    similarityText = formatSimilarityText(similarityText);

    return (
        <div className="similarity-page">
            {/* Header */}
            <header className="header">
                <h1>Similarity Analysis</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="similarity-container">
                    <div className="document-info">
                        <p><strong>Filename:</strong> {filename}</p> {/* Display the filename */}
                        <input type="text" placeholder="Search Similarity" className="search-input" />
                    </div>

                    <div className="similarity-text">
                        {/* Displaying the formatted similarity text */}
                        <h3>Similarity Results:</h3>
                        <div dangerouslySetInnerHTML={{ __html: similarityText }} />
                    </div>
                </div>
            </main>

        </div>
    );
}

export default SimilarityPage;
