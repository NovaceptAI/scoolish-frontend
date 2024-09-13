import React from 'react';
import '../styles/SentimentAnalysisPage.css'; // Create a CSS file for styling

function SentimentAnalysisPage() {
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
                        <p>Words: 1000</p>
                        <p>Section: 18</p>
                        <p>Topic: 12</p>
                        <p>Keywords: 3000</p>
                        <input type="text" placeholder="Search Topic" />
                    </div>

                    <div className="grid-container">
                        {/* Sample by Topic */}
                        <div className="grid-item">
                            <h3>Sample by Topic</h3>
                            <ul>
                                <li>Education: 2000</li>
                                <li>Moods: 1500</li>
                                <li>Election: 600</li>
                                <li>Jobs: 1820</li>
                                <li>Salary: 495</li>
                                <li>Design: 7897</li>
                            </ul>
                        </div>

                        {/* Keyword Cloud */}
                        <div className="grid-item">
                            <h3>Keyword Cloud</h3>
                            <div className="keyword-cloud">
                                {/* Add keyword cloud image or content */}
                                <img src="/static/keyword_cloud.jpg" alt="Keyword Cloud" />
                            </div>
                        </div>

                        {/* Overall Sentiment */}
                        <div className="grid-item">
                            <h3>Overall Sentiment</h3>
                            <div className="sentiment-chart">
                                {/* Add overall sentiment pie chart */}
                                <img src="/static/overall_sentiment.png" alt="Overall Sentiment" />
                            </div>
                        </div>

                        {/* Sentiment by Topic */}
                        <div className="grid-item">
                            <h3>Sentiment by Topic</h3>
                            <div className="bar-chart">
                                {/* Add sentiment by topic bar chart */}
                                <img src="/static/overall_sentiment.jpg" alt="Sentiment by Topic" />
                            </div>
                        </div>

                        {/* Sentiment Over Time */}
                        <div className="grid-item">
                            <h3>Sentiment Over Time</h3>
                            <div className="line-chart">
                                {/* Add sentiment over time line chart */}
                                <img src="/static/sentiment_over_time.jpg" alt="Sentiment Over Time" />
                            </div>
                        </div>

                        {/* Additional Graph */}
                        <div className="grid-item">
                            <h3>Sample by Sentiment</h3>
                            <div className="bar-chart">
                                {/* Add sample by sentiment bar chart */}
                                <img src="/static/sample_by_sentiment.jpg" alt="Sample by Sentiment" />
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

export default SentimentAnalysisPage;
