import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

function MindMapPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // This is the document ID and selected features for testing
    const documentIds = ["f7c58d33-36be-4f1b-845d-aa67944c3910"];
    
    // Function to send the request to the backend
    const fetchResults = async () => {
        setLoading(true);

        // Prepare the payload
        const payload = {
            document_ids: documentIds,
            selectedFeatures: ["summarization"]
        };

        try {
            const response = await fetch('http://20.127.228.226/documents/analyze_models', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json(); // The entire response is the result
                console.log('API Response:', data);
                // Navigate to the Summarization Page with data
                navigate('/summarization', { state: { results: data } });
            } else {
                alert('Failed to fetch results');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Mind Map Page</h1>
            <button onClick={fetchResults} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Summarization'}
            </button>
        </div>
    );
}

export default MindMapPage;
