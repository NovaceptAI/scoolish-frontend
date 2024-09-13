import React, { useState } from 'react';
import '../styles/FileDisplay.module.css';

function FileDisplay() {
    const [files, setFiles] = useState({
        documents: [],
        videos: [],
        audios: []
    });

    const handleFileChange = (event) => {
        const type = event.target.name;
        const selectedFiles = Array.from(event.target.files).map(file => ({
            name: file.name,
            type: file.type,
            size: file.size,
            url: URL.createObjectURL(file)
        }));

        setFiles(prevFiles => ({
            ...prevFiles,
            [type]: [...prevFiles[type], ...selectedFiles]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected files:', files);
        // Further processing logic here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="documents" accept=".pdf" multiple onChange={handleFileChange} />
                <input type="file" name="videos" accept="video/*" multiple onChange={handleFileChange} />
                <input type="file" name="audios" accept="audio/*" multiple onChange={handleFileChange} />
                <button type="submit">Analyze Selected Files</button>
            </form>

            <div>
                {Object.keys(files).map((key) => (
                    <div key={key}>
                        <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                        <ul>
                            {files[key].map((file, index) => (
                                <li key={index}>
                                    {file.name} - {file.size} bytes
                                    <br />
                                    <a href={file.url} target="_blank" rel="noopener noreferrer">Preview</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileDisplay;
