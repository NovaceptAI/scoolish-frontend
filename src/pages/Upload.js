import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Upload.css';
import uploadFile from '../scripts/upload'; // Import the JavaScript functions
import ToolsSection from './ToolsSection'; // Import the ToolsSection component

const Upload = () => {
    const [documentFile, setDocumentFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);

    const handleFileChange = (event) => {
        const { id, files } = event.target;
        if (files.length > 0) {
            const file = files[0];
            switch (id) {
                case 'doc-upload':
                    setDocumentFile(file);
                    break;
                case 'video-upload':
                    setVideoFile(file);
                    break;
                case 'audio-upload':
                    setAudioFile(file);
                    break;
                default:
                    break;
            }
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();

        if (documentFile) {
            formData.append('document', documentFile);
        }
        if (videoFile) {
            formData.append('video', videoFile);
        }
        if (audioFile) {
            formData.append('audio', audioFile);
        }

        uploadFile(formData); // Call the upload function with the prepared FormData
    };

    return (
        <div>
            <main>
                <div className="upload-container">
                    <h2>Upload</h2>
                    <form id="uploadForm" onSubmit={handleFormSubmit}>
                        <input type="text" name="url" placeholder="Search Keyword for a Summarized Output from Google" className="url-input" />
                        <div className="file-upload-options">
                            <label>
                                <img src="/static/upload_logo.jpg" className="upload-item" alt="Upload Document" />
                                <input type="file" className="btn" id="doc-upload" multiple accept=".pdf,.txt,.docx,.jpg,.jpeg,.png" onChange={handleFileChange} />
                            </label>
                            <label>
                                <img src="/static/upload_video_logo.jpg" className="upload-item" alt="Upload Video" />
                                <input type="file" className="btn" id="video-upload" multiple accept="video/mp4" onChange={handleFileChange} />
                            </label>
                            <label>
                                <img src="/static/upload_audio_logo.jpg" className="upload-item" alt="Upload Audio" />
                                <input type="file" className="btn" id="audio-upload" multiple accept="audio/wav,audio/mp3" onChange={handleFileChange} />
                            </label>
                        </div>
                        <button className='btn' type="submit">Continue</button>
                    </form>
                </div>

                {/* Add the Tools Section Below the Upload Section */}
                {/* Add ToolsSection below the form */}
                <ToolsSection />

            </main>
        </div>
    );
}

export default Upload;
