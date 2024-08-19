import React, { useState } from 'react';
import '../styles/Upload.css';
import uploadFile from '../scripts/upload'; // Import the JavaScript functions

const Upload = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const input = event.target;
        if (input.files.length > 0) {
            setFileName(input.files[0].name);
        }
    };

    const handleFormSubmit = (event) => {
        uploadFile(event); // Call the upload function
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
                <div className="upload-container">
                    <h2>Upload</h2>
                    <form id="uploadForm" onSubmit={handleFormSubmit}>
                        <input type="text" name="url" placeholder="Search Keyword for a Summarized Output from Google" className="url-input" />
                        <div className="file-upload-options">
                            <label>
                                <img src="/static/upload_logo.jpg" className="upload-item" alt="Upload Document" />
                                <input type="file" name="document" className="upload-btn" id="doc-upload" multiple accept=".pdf,.txt,.docx" onChange={handleFileChange} />
                            </label>
                            <label>
                                <img src="/static/upload_video_logo.jpg" className="upload-item" alt="Upload Video" />
                                <input type="file" name="video" className="upload-btn" id="video-upload" multiple accept="video/mp4" onChange={handleFileChange} />
                            </label>
                            <label>
                                <img src="/static/upload_audio_logo.jpg" className="upload-item" alt="Upload Audio" />
                                <input type="file" name="audio" className="upload-btn" id="audio-upload" multiple accept="audio/wav,audio/mp3" onChange={handleFileChange} />
                            </label>
                        </div>
                        <button type="submit">Continue</button>
                    </form>
                </div>

                <section className="cta-section">
                    <h3>Ready to leap from feedback to action?</h3>
                    <p>Invest in your people today. If not now, when?</p>
                    <a href="#" className="cta-button">Book a Demo</a>
                </section>
            </main>

            <footer>
                <div className="footer-container">
                    <div>
                        <h4>Scoolish</h4>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text.</p>
                        <div className="social-links">
                            <a href="#"><img src="/static/x_logo.jpg" className="small-logo" alt="Twitter" /></a>
                            <a href="#"><img src="/static/fb_logo.jpg" className="small-logo" alt="Facebook" /></a>
                            <a href="#"><img src="/static/insta_logo.jpg" className="small-logo" alt="Instagram" /></a>
                            <a href="#"><img src="/static/linkedin_logo.jpg" className="small-logo" alt="LinkedIn" /></a>
                        </div>
                    </div>
                    <div>
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Our services</h4>
                        <ul>
                            <li><a href="#">Document analysis</a></li>
                            <li><a href="#">Document stacking</a></li>
                            <li><a href="#">Audio analysis</a></li>
                            <li><a href="#">Video analysis</a></li>
                            <li><a href="#">Optical Character Recognition</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <p>Phone: +91 4000 231276</p>
                        <p>Email: connect@digitalmachine.in</p>
                        <p>Address: Digital machine Pvt. Ltd. Arab Egypt (c), 400065</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>All Rights Reserved | Copyright © digitalmachine.</p>
                </div>
            </footer>
        </div>
    );
}

export default Upload;
