import React from 'react';
import '../styles/TranslationPage.css'; // Ensure you have this CSS file

function TranslationPage() {
    return (
        <div className="translation-page">
            {/* Header */}
            <header className="header">
                <h1>Translation</h1>
            </header>

            {/* Main Content */}
            <main className="content">
                <div className="translation-container">
                    {/* Source Language and Content */}
                    <div className="source-content">
                        <div className="language-indicator">
                            <h3>English</h3>
                        </div>
                        {/* Placeholder for original content (image, video, audio, document) */}
                        <div className="file-preview">
                            <img src="/static/test_23.jpg" alt="Original Document Preview" />
                            <p>Document Title: Sample.pdf</p>
                        </div>
                    </div>

                    {/* Translated Language and Content */}
                    <div className="translated-content">
                        <div className="language-indicator">
                            <h3>Hindi</h3>
                        </div>
                        <div className="translated-text">
                            <p>
                            Google की निःशुल्क सेवा, अंग्रेजी और 100 से अधिक अन्य भाषाओं के बीच शब्दों, वाक्यांशों और वेब पेजों का तुरंत अनुवाद करती है।
                            </p>
                            <button className="copy-btn">Copy Translated Text</button>
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

export default TranslationPage;
