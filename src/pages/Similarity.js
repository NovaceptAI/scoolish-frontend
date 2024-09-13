import React from 'react';
import '../styles/SimilarityPage.css'; // Create a CSS file for styling

function SimilarityPage() {
    return (
        <div className="similarity-page">
            {/* Header */}
            <header className="header">
                <h1>Similarity Feature</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="similarity-container">
                    <div className="document-info">
                        <p>Words: 1200</p>
                        <p>Section: 15</p>
                        <p>Topic: 10</p>
                        <p>Keywords: 2000</p>
                        <input type="text" placeholder="Search Topic" />
                    </div>

                    <div className="grid-container">
                        {/* Sample by Similarity */}
                        <div className="grid-item">
                            <h3>Sample by Similarity</h3>
                            <ul>
                                <li>Document 1: 95% Similar</li>
                                <li>Document 2: 89% Similar</li>
                                <li>Document 3: 77% Similar</li>
                                <li>Document 4: 80% Similar</li>
                                <li>Document 5: 70% Similar</li>
                            </ul>
                        </div>

                        {/* Similarity Matrix */}
                        <div className="grid-item">
                            <h3>Similarity Matrix</h3>
                            <div className="similarity-matrix">
                                {/* Add similarity matrix image or content */}
                                <img src="/static/similarity_matrix.jpg" alt="Similarity Matrix" />
                            </div>
                        </div>

                        {/* Overall Similarity Score */}
                        <div className="grid-item">
                            <h3>Overall Similarity Score</h3>
                            <div className="similarity-score">
                                {/* Add similarity score pie chart */}
                                <img src="/static/similarity_score.jpg" alt="Similarity Score" />
                            </div>
                        </div>

                        {/* Similarity by Section */}
                        <div className="grid-item">
                            <h3>Similarity by Section</h3>
                            <div className="bar-chart">
                                {/* Add similarity by section bar chart */}
                                <img src="/static/similarity_matrix.jpg" alt="Similarity by Section" />
                            </div>
                        </div>

                        {/* Similarity Over Time */}
                        <div className="grid-item">
                            <h3>Similarity Over Time</h3>
                            <div className="line-chart">
                                {/* Add similarity over time line chart */}
                                <img src="/static/topic_chart_placeholder.jpg" alt="Similarity Over Time" />
                            </div>
                        </div>

                        {/* Additional Graph */}
                        <div className="grid-item">
                            <h3>Sample by Document Comparison</h3>
                            <div className="bar-chart">
                                {/* Add sample by document comparison bar chart */}
                                <img src="/static/sentiment_over_time.jpg" alt="Sample by Document" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 My Company. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default SimilarityPage;
