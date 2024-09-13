import React, { useState } from 'react';
import '../styles/SegmentationPage.css'; // Ensure you have this CSS file

function SegmentationPage() {
    const [activeSegment, setActiveSegment] = useState('heading');

    const segments = {
        heading: [
            'IBM defines natural language processing (NLP) as the branch of computer science.',
            'Major use cases of NLP in education'
        ],
        paragraph: [
            'IBM defines natural language processing (NLP) as the branch of computer science—and more specifically, the branch of artificial intelligence or AI—concerned with giving computers the ability to understand text and spoken words in much the same way human beings can.',
            'Major use cases of NLP in education are spam detection, machine translation, virtual agents and chatbots, social media sentiment analysis, and text summarization.'
        ],
        section: [
            'NLP can be used to perform tasks such as speech recognition, grammatical tagging, word sense disambiguation, named entity recognition, sentiment analysis, and natural language generation.',
            'In education, NLP can be used to perform tasks such as speech recognition, grammatical tagging, word sense disambiguation, named entity recognition, and sentiment analysis.'
        ],
        topic: [
            'Topic A: Understanding NLP and AI',
            'Topic B: Applications of NLP in Education'
        ],
        words: [
            'NLP', 'AI', 'Computers', 'Education', 'Speech', 'Text', 'Recognition', 'Sentiment', 'Analysis'
        ],
        lines: [
            'NLP can be used to perform tasks such as speech recognition, grammatical tagging, word sense disambiguation.',
            'Major use cases of NLP in education are spam detection, machine translation, and text summarization.'
        ]
    };
    

    return (
        <div className="segmentation-page">
            {/* Header */}
            <header className="header">
                <h1>Segmentation</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="segmentation-container">
                    <div className="document-preview">
                        {/* Dummy preview, you can replace this with actual document preview */}
                        <img src="/static/test_23.jpg" alt="Document Preview" />
                    </div>

                    <div className="segmentation-output">
                        {/* Segment Options */}
                        <div className="segment-options">
                            {Object.keys(segments).map(segment => (
                                <button
                                    key={segment}
                                    className={`segment-btn ${activeSegment === segment ? 'active' : ''}`}
                                    onClick={() => setActiveSegment(segment)}
                                >
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                </button>
                            ))}
                            <input type="text" placeholder="Search Keywords" className="search-input" />
                        </div>

                        {/* Segmented Text */}
                        <div className="segmentation-text">
                            {segments[activeSegment].map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>

                        {/* Copy Button */}
                        <button className="copy-btn">Copy</button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 DMOA. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default SegmentationPage;
