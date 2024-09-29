import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/TopicModellingPage.css'; // Create CSS for styling

function TopicModelingPage() {
    const location = useLocation();

    // Get the passed state from the previous page
    const { data } = location.state || {}; // Assuming the state contains 'data' from the response

    // Extract the filename and topic modeling text from the data
    const filename = data ? Object.keys(data)[0] : 'Unknown'; // Assuming the response has one file
    let topicModelingText = data ? data[filename].topic_modelling : 'No topic modeling available';

    // Format the topic modeling text to show in a more readable way
    const formatTopicModelingText = (text) => {
        return text
            .replace(/\*\*(\d+)\./g, 'Topic $1:') // Numbered topics (e.g., **1.)
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // General bold topics
    };

    topicModelingText = formatTopicModelingText(topicModelingText);

    const [searchKeyword, setSearchKeyword] = useState('');

    const handleKeywordSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    return (
        <div className="topic-modeling-page">
            <header className="topicheader">
                <h1>Topic Modeling</h1>
            </header>

            <main className="content">
                <div className="topic-container">
                    <div className="document-preview">
                        <p><strong>Filename:</strong> {filename}</p>
                    </div>

                    <div className="topic-analysis">
                        {/* <div className="topic-stats">
                            <p>Words: 1000</p>
                            <p>Sections: 18</p>
                            <p>Topics: 12</p>
                            <p>Keywords: 3000</p>
                        </div> */}

                        {/* <div className="search-bar">
                            <input
                                type="text"
                                value={searchKeyword}
                                placeholder="Search Keywords"
                                onChange={handleKeywordSearch}
                            />
                        </div> */}

                        <div className="topics">
                            <h3>Topics Extracted:</h3>
                            <div
                                className="formatted-text"
                                dangerouslySetInnerHTML={{ __html: topicModelingText }}
                            ></div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default TopicModelingPage;
