import React, { useState } from 'react';
import '../styles/TopicModellingPage.css'; // Create CSS for styling

const dummyTopics = {
    music: 2000,
    moods: 1500,
    election: 600,
    jobs: 1820,
    education: 565,
    skills: 235,
    salary: 495,
    design: 7897,
};

const dummyStats = [
    { topic: 'Disease', count: 215, total: 651, color: 'Green' },
    { topic: 'Man Power', count: 458, total: 901, color: 'Pink' },
    { topic: 'Environment', count: 846, total: 804, color: 'Purple' },
    { topic: 'Nature', count: 84, total: 120, color: 'Blue' },
];

function TopicModelingPage() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('Topic');

    const handleKeywordSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    return (
        <div className="topic-modeling-page">
            <header className="header">
                <h1>Topic Modeling</h1>
            </header>

            <main className="content">
                <div className="topic-container">
                    <div className="document-preview">
                        <img src="/static/test_23.jpg" alt="Document Preview" />
                    </div>

                    <div className="topic-analysis">
                        <div className="topic-stats">
                            <p>Words: 1000</p>
                            <p>Section: 18</p>
                            <p>Topic: 12</p>
                            <p>Keywords: 3000</p>
                        </div>

                        <div className="search-bar">
                            <input
                                type="text"
                                value={searchKeyword}
                                placeholder="Search Keywords"
                                onChange={handleKeywordSearch}
                            />
                        </div>

                        <div className="topics">
                            {Object.entries(dummyTopics).map(([topic, count], index) => (
                                <div key={index} className="topic-item">
                                    <span className="topic-label">{topic}</span>
                                    <span className="topic-count">{count}</span>
                                </div>
                            ))}
                        </div>

                        <div className="topic-chart">
                            {/* Placeholder for Topic Clustering visualization */}
                            <img
                                src="/static/topic_chart_placeholder.jpg"
                                alt="Topic Clusters"
                                className="topic-clusters"
                            />
                        </div>

                        <div className="topic-stats">
                            {dummyStats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <p>
                                        {stat.topic}: {stat.count} of {stat.total}
                                    </p>
                                    <div className="stat-bar" style={{ backgroundColor: stat.color }}>
                                        <div
                                            className="stat-fill"
                                            style={{ width: `${(stat.count / stat.total) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2024 My Company. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default TopicModelingPage;
