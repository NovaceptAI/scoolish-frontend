import React, { useState } from 'react';
import '../styles/SelectPagesFeatures.css';

function SelectPagesFeatures() {
    const [selectedPages, setSelectedPages] = useState([]);
    const [showKeywordInput, setShowKeywordInput] = useState(false);

    const addPage = () => {
        const pageSelect = document.getElementById('page-select');
        const pageValue = pageSelect.value;

        if (pageValue) {
            setSelectedPages([...selectedPages, pageValue]);
        }
    };

    const handleKeywordCheckboxChange = () => {
        setShowKeywordInput(!showKeywordInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Submit form data
        fetch('/documents/analyze_models', {
            method: 'POST',
            body: formData,
        }).then(response => {
            if (response.ok) {
                // Redirect or handle success
            } else {
                alert('Failed to process document.');
            }
        });
    };

    return (
        <div>
            {/* <header>
                <div className="header-container">
                    <img src="/static/scoolish-menu-bar.jpg" alt="Schoolish Logo" className="logo" />
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">All Features</a></li>
                            <li><a href="#">Augmented AI</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <a href="#" className="login-btn">Login</a>
                </div>
            </header> */}

            <main>
                <div className="process-container">
                    <a href="#" className="back-btn">&larr; Back to Upload</a>
                    <h2>Document Analysis</h2>

                    <div className="file-preview">
                        <p id="filename">Filename.pdf</p>
                    </div>

                    <form id="analyzeForm" onSubmit={handleSubmit}>
                        <input type="hidden" name="document_ids" id="document_ids" value="{document_ids}" />

                        <div className="page-selection">
                            <label htmlFor="page-select">Total Pages: </label>
                            <select id="page-select" name="pages">
                                <option value="all">All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="1-3">1-3</option>
                            </select>
                            <button type="button" className="add-more-btn" onClick={addPage}>+ Add More</button>
                        </div>

                        <div id="selected-pages">
                            {selectedPages.map((page, index) => (
                                <div key={index}>
                                    <input type="hidden" name="pages" value={page} />
                                    <div>Page(s): {page}</div>
                                </div>
                            ))}
                        </div>

                        <div className="features-container">
                            <div className="feature">
                                <p>Summarization</p>
                                <input type="checkbox" name="features" value="summarization" />
                                <select name="features" multiple>
                                    <option value="comprehensive">Comprehensive</option>
                                    <option value="short">Short</option>
                                </select>
                            </div>
                            <div className="feature">
                                <p>Translate</p>
                                <input type="checkbox" name="features" value="translation" />
                                <select name="features" multiple>
                                    <option value="summarised_translation">Summarised Translation</option>
                                    <option value="full_translation">Full Translation</option>
                                </select>
                            </div>
                            <div className="feature">
                                <p>Segmentation</p>
                                <input type="checkbox" name="features" value="segmentation" />
                            </div>
                            <div className="feature">
                                <p>Clustering</p>
                                <input type="checkbox" name="features" value="clustering" />
                            </div>
                            <div className="feature">
                                <p>Sentiment Analysis</p>
                                <input type="checkbox" name="features" value="sentiment_analysis" />
                            </div>
                            <div className="feature">
                                <p>Topic Modelling</p>
                                <input type="checkbox" name="features" value="topic_modelling" />
                                <select name="features" multiple>
                                    <option value="concise">Concise</option>
                                    <option value="all_topics">All Topics</option>
                                </select>
                            </div>
                            <div className="feature">
                                <p>Chronology</p>
                                <input type="checkbox" name="features" value="chronology" />
                            </div>
                            <div className="feature">
                                <p>Similarity</p>
                                <input type="checkbox" name="features" value="similarity" />
                            </div>
                            <div className="feature">
                                <p>Entity Resolution</p>
                                <input type="checkbox" name="features" value="entity_resolution" />
                            </div>
                            <div className="feature">
                                <p>Keyword Search</p>
                                <input type="checkbox" name="features" value="keyword_search" id="keyword-checkbox" onChange={handleKeywordCheckboxChange} />
                                {showKeywordInput && (
                                    <input type="text" name="keywords" placeholder="Enter keywords" id="keyword-input" />
                                )}
                            </div>
                        </div>

                        <button type="submit" className="start-process-btn">Start Process</button>
                    </form>
                </div>
            </main>

            <footer>
                <div className="footer-container">
                    <p>Ready to leap from feedback to action? Invest in your people today. If not now, when?</p>
                    <button className="book-demo-btn">Book a Demo</button>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Digital Machine</h4>
                            <p>In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                        </div>
                        <div className="footer-column">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Document Analysis</a></li>
                                <li><a href="#">Document Stacking</a></li>
                                <li><a href="#">Audio Analysis</a></li>
                                <li><a href="#">Video Analysis</a></li>
                                <li><a href="#">Optical Character Recognition</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Contact</h4>
                            <p>Phone: +1 400 3213256</p>
                            <p>Email: connect@digitalmachine.in</p>
                            <p>Address: Digital Machine Pvt. Ltd. Arab, Egypt (e), 400085</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SelectPagesFeatures;
