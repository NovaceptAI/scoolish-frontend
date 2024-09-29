import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/SelectPagesFeatures.css';

function SelectPagesFeatures() {
    const [documents, setDocuments] = useState([]);
    
    // Extract document_ids from the URL query string
    const location = useLocation();
    const navigate = useNavigate();
    // const documentIds = new URLSearchParams(location.search).get('ids').split(',');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const documentInfo = queryParams.get('documents');

        if (documentInfo) {
            // Decode the document info
            const decodedDocuments = JSON.parse(decodeURIComponent(documentInfo));
            setDocuments(decodedDocuments);
        }
    }, [location.search]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Extract document_ids from the documents
        const documentIds = documents.map(document => document.document_id);

        // Redirect with document_ids as query parameters
        setTimeout(() => {
            if (documentIds.length > 0) {
                navigate(`/mindmap?ids=${documentIds.join(',')}`);  // Pass the document IDs to the Mind Map page
            } else {
                console.error('No document IDs found');
            }
        }, 1000);
    };

    return (
        <div className="file-preview-page">
            <div className="preview-container">
                {/* Render the documents with preview */}
                {documents.length > 0 ? (
                    documents.map((document, index) => (
                        <div key={index} className="file-preview">
                            <p>Document {index + 1} ({document.name})</p>
                {/* Submit button to go to Mind Map */}
                
                        </div>
                    ))
                ) : (
                    <p>No documents available for preview.</p>
                )}
                <form onSubmit={handleSubmit}>
                    <button className='btn primanry-btn' type="submit" >Go to Mind Map</button>
                </form>
                
            </div>
    
            
        </div>
    );
}

export default SelectPagesFeatures;
