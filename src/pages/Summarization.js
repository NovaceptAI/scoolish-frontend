import React from 'react';
import '../styles/SummarizationPage.css'; // Ensure you have this CSS file

function SummarizationPage() {
    return (
        <div className="summarization-page">
            {/* Header */}
            <header className="header">
                <h1>Summarization</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="summarization-container">
                    <div className="document-info">
                        <p><strong>Pages:</strong> 4</p>
                        <p><strong>Title:</strong> Unknown</p>
                        <p><strong>Author:</strong> Unknown</p>
                        <p><strong>Next feature:</strong> Segmentation</p>
                        <input type="text" placeholder="Search Keywords" className="search-input"/>
                    </div>

                    <div className="summarization-text">
                        <p>
                        Here’s a brief recap of the key points:

Summarization: IBM described how NLP models are used to condense large texts into concise summaries, highlighting the most important points without losing the essence of the content.

Sentiment Analysis: This involves determining the sentiment or emotional tone in a piece of text, whether it’s positive, negative, or neutral. Sentiment analysis is widely used in understanding customer feedback, reviews, and social media interactions.

Translation: NLP helps in translating text from one language to another while preserving context, meaning, and sentiment. IBM's focus was on accurate and context-aware translations.

Entity Recognition: The process of identifying and categorizing entities (like people, organizations, dates, etc.) within a text, making it easier to extract relevant information from unstructured data.

Topic Modeling: NLP techniques used to discover hidden topics within a large corpus of documents, helping in organizing and understanding large datasets of text.

Keyword Extraction and Similarity Analysis: NLP can be used to extract important keywords and phrases from documents and compare texts to find similarities in themes, ideas, or content.
                        </p>
                        <button className="copy-btn">Copy</button>
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

export default SummarizationPage;
