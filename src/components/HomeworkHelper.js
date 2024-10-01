import React, { useState } from 'react';
import '../styles/HomeworkHelper.css';

const HomeworkHelper = () => {
    const [homeworkInput, setHomeworkInput] = useState('');
    const [subject, setSubject] = useState('Math');
    const [difficulty, setDifficulty] = useState('Intermediate');
    const [hints, setHints] = useState([]);
    const [solution, setSolution] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    // Handle text input changes
    const handleInputChange = (event) => {
        setHomeworkInput(event.target.value);
    };

    // Handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    // Handle subject selection
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    // Handle difficulty selection
    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('homework', homeworkInput);
        formData.append('subject', subject);
        formData.append('difficulty', difficulty);
        if (imageFile) {
            formData.append('image', imageFile);
        }

        // Mock API call to process the homework question with AI
        const response = await fetch('/api/process-homework', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setHints(data.hints);
        setSolution(data.solution);
        setLoading(false);
    };

    // Camera capture functionality
    const handleCapture = async () => {
        const video = document.querySelector('video');
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
            setImageFile(blob);
        });
    };

    // Start the camera
    const startCamera = async () => {
        const video = document.querySelector('video');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
    };

    // Toggle camera on/off
    const toggleCamera = () => {
        setIsCameraOn((prev) => !prev);
        if (!isCameraOn) {
            startCamera();
        }
    };

    return (
        <div className="homework-helper-container">
            <h1 className="title">AI-Powered Homework Helper</h1>

            <form className="homework-form" onSubmit={handleSubmit}>
                <textarea
                    className="homework-input"
                    placeholder="Enter your homework question here (up to 300 words)..."
                    value={homeworkInput}
                    onChange={handleInputChange}
                    maxLength="300"
                    rows="6"
                />

                <div className="options-container">
                    <div className="option">
                        <label htmlFor="subject">Subject:</label>
                        <select id="subject" value={subject} onChange={handleSubjectChange}>
                            <option value="Math">Math</option>
                            <option value="Science">Science</option>
                            <option value="History">History</option>
                            <option value="Language Arts">Language Arts</option>
                        </select>
                    </div>

                    <div className="option">
                        <label htmlFor="difficulty">Difficulty:</label>
                        <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>

                <div className="upload-container">
                    <label className="upload-btn">
                        Upload Homework
                        <input type="file" accept="image/*" onChange={handleFileUpload} />
                    </label>
                </div>

                <div className="camera-toggle-container">
                    <button type="button" className="toggle-camera-btn" onClick={toggleCamera}>
                        {isCameraOn ? 'Turn off Camera' : 'Capture Homework with Camera'}
                    </button>
                </div>

                {isCameraOn && (
                    <div className="camera-container">
                        <video className="camera-view" autoPlay></video>
                        <button type="button" className="capture-btn" onClick={handleCapture}>
                            Capture Image
                        </button>
                    </div>
                )}

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Processing...' : 'Get Help'}
                </button>
            </form>

            <div className="results-section">
                <h2>Hints & Suggestions</h2>
                {hints.length > 0 ? (
                    <ul className="hints-list">
                        {hints.map((hint, index) => (
                            <li key={index}>{hint}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No hints available yet.</p>
                )}

                <h2>Solution</h2>
                {solution ? <p>{solution}</p> : <p>No solution available yet.</p>}
            </div>
        </div>
    );
};

export default HomeworkHelper;
