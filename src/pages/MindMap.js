import React, { useState, useEffect  } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom'; // For navigation
import '../styles/MindMapPage.css';

function MindMapPage() {
    const features = [
        { name: "Summarization", route: "/summarization" },
        { name: "Translation", route: "/translation" },
        { name: "Segmentation", route: "/segmentation" },
        { name: "Entity Resolution", route: "/entity_resolution" },
        { name: "Sentiment Analysis", route: "/sentiment_analysis" },
        { name: "Topic Modelling", route: "/topicModelling" },
        { name: "Chronology", route: "/chronology" },
        { name: "Similarity", route: "/similarity" }
    ];
    const [documentIds, setDocumentIds] = useState([]);
    const [layout, setLayout] = useState('diamond'); // Default to circle layout
    const [selectedFeatures, setSelectedFeatures] = useState([]); // Track selected features
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English
    const [summarizationType, setSummarizationType] = useState(null); // Track summarization type
    const [translationType, setTranslationType] = useState(null); // Track translation type
    const [topicModellingType, setTopicModellingType] = useState(null); // Track topic modelling type
    const [showTranslationPopup, setShowTranslationPopup] = useState(false);
    const [showSummarizationPopup, setShowSummarizationPopup] = useState(false);
    const [showTopicModellingPopup, setShowTopicModellingPopup] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const languages = [
        { code: 'English', name: 'English' },
        { code: 'Hindi', name: 'Hindi' },
        { code: 'French', name: 'French' },
        { code: 'Spanish', name: 'Spanish' },
        { code: 'German', name: 'German' },
        { code: 'Chinese', name: 'Chinese' },
        { code: 'Japanese', name: 'Japanese' },
        { code: 'Korean', name: 'Korean' },
        { code: 'Russian', name: 'Russian' },
        { code: 'Italian', name: 'Italian' },
        { code: 'Portuguese', name: 'Portuguese' },
        { code: 'Arabic', name: 'Arabic' },
        { code: 'Bengali', name: 'Bengali' },
        { code: 'Tamil', name: 'Tamil' },
        { code: 'Telugu', name: 'Telugu' },
        { code: 'Vietnamese', name: 'Vietnamese' },
        { code: 'Malay', name: 'Malay' }
    ];

    // console.log('Location state:', location.state);

    // Function to parse query params from URL
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);  // This correctly uses the useLocation hook
    };

    // Use query params from the URL
    const query = useQuery();

    useEffect(() => {
        // Get 'ids' from the query string and split by comma if multiple IDs
        const ids = query.get('ids')?.split(',') || [];
        setDocumentIds(ids);
    }, [query]);

    // Function to convert feature name to lowercase with underscores for backend
const formatFeatureForBackend = (feature) => {
    return feature.toLowerCase().replace(/\s+/g, '_');
};

// Handle selecting multiple features
const handleFeatureSelect = (feature) => {
    if (selectedFeatures.includes(feature)) {
        // Deselect feature if already selected
        setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
        // Add feature to selected list
        setSelectedFeatures([...selectedFeatures, feature]);

        // Show modals based on the feature selected
        if (feature === 'Summarization') {
            setShowSummarizationPopup(true); // Show Summarization Type popup
        } else if (feature === 'Translation') {
            setShowTranslationPopup(true); // Show Translation Type popup
        } else if (feature === 'Topic Modelling') {
            setShowTopicModellingPopup(true); // Show Topic Modelling popup
        }
    }
};

// Handle language selection change
const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setShowTranslationPopup(false); // Close the modal after selecting a language
};

const fetchWithTimeout = async (url, options, timeout = 60000) => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
    ]);
};

// Handler to send the selected features and language to the endpoint
const handleMultiFeatureSubmit = async () => {
    if (selectedFeatures.length > 0) {
        // Prepare the payload with the formatted features for the backend
        const payload = {
            document_ids: documentIds,
            selectedFeatures: selectedFeatures.map(formatFeatureForBackend),
            selectedLanguage,
            summarizationType,  // Only included if 'Summarization' is selected
            translationType,    // Only included if 'Translation' is selected
            topicModellingType, // Only included if 'Topic Modelling' is selected
        };

        try {
            // Send a POST request to the API and wait for the response
            const response = await fetchWithTimeout('http://20.127.228.226/documents/analyze_models', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // Convert payload to JSON string
            }, 60000);

            const data = await response.json(); // Wait for the JSON response

            if (response.ok) {
                // Directly pass the received data since the response is not wrapped in a `results` object
                console.log('API Response:', data);

                if (selectedFeatures.length === 1) {
                    // If only one feature is selected, redirect to the single-feature page
                    const selectedFeature = selectedFeatures[0];
                    const featureRoute = `/${selectedFeature
                        .split(' ')
                        .map((word, index) => (index === 0 ? word.toLowerCase() : word))
                        .join('')}`; // Converts feature to lowercase and adds it as route
                    navigate(featureRoute, { state: { selectedFeature, data } });
                } else {
                    // Redirect to the multi-feature page for multiple features
                    navigate('/multifeature', { state: { selectedFeatures, data } });
                }
            } else {
                console.error('Error:', data.message || 'Unknown error occurred');
                alert('An error occurred while processing your request. Please try again.');
            }
        } catch (error) {
            // Handle network errors or other unexpected errors
            console.error('Error:', error);
            alert('An error occurred. Please check your network connection and try again.');
        }
    } else {
        alert('Please select at least one feature.');
    }
};
    
    

    return (
        <div className="mind-map-container">
            {/* Layout options for changing view */}
            <div className="layout-options">
                <button onClick={() => setLayout('circle')}>Circle</button>
                <button onClick={() => setLayout('diamond')}>Diamond</button>
                <button onClick={() => setLayout('square')}>Square</button>
            </div>

            {/* Features displayed in different layouts */}
            <div className={`features-cloud ${layout}`}>
                <div className="file-center">
                    <img src="/static/test_23.jpg" alt="File Preview" />
                </div>

                {features.map((feature, index) => (
                    <div key={index} className={`feature-node node-${index}`}>
                        <input
                            type="checkbox"
                            id={`feature-${index}`}
                            onChange={() => handleFeatureSelect(feature.name)}
                            checked={selectedFeatures.includes(feature.name)}
                        />
                        <label htmlFor={`feature-${index}`} style={{ cursor: 'pointer' }}>
                            {feature.name}
                        </label>
                    </div>
                ))}
            </div>

            {showSummarizationPopup && (
                <div className="popup">
                    <h3>Select Summarization Type</h3>
                    <div className="checkbox-group">
                        <label>
                            <input 
                                type="radio" 
                                name="summarization_type" 
                                value="short" 
                                onClick={() => setSummarizationType('short')}
                            />
                            Short Summary
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="summarization_type" 
                                value="comprehensive" 
                                onClick={() => setSummarizationType('comprehensive')}
                            />
                            Comprehensive Summary
                        </label>
                    </div>
                    <div className="popup-actions">
                        <button onClick={() => setShowSummarizationPopup(false)}>Close</button>
                    </div>
                </div>
            )}

            {showTranslationPopup && (
                <div className="popup">
                    <h3>Select Translation Type and Language</h3>
                    <div className="checkbox-group">
                        <label>
                            <input 
                                type="radio" 
                                name="translation_type" 
                                value="full_translation" 
                                onClick={() => setTranslationType('full_translation')}
                            />
                            Full Translation
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="translation_type" 
                                value="summarised_translation" 
                                onClick={() => setTranslationType('summarised_translation')}
                            />
                            Summarised Translation
                        </label>
                    </div>
                    <div className="language-dropdown">
                        <select value={selectedLanguage} onChange={handleLanguageChange}>
                            {languages.map((language, index) => (
                                <option key={index} value={language.code}>
                                    {language.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="popup-actions">
                        <button onClick={() => setShowTranslationPopup(false)}>Close</button>
                    </div>
                </div>
            )}

            {showTopicModellingPopup && (
                <div className="popup">
                    <h3>Select Topic Modelling Type</h3>
                    <div className="checkbox-group">
                        <label>
                            <input 
                                type="radio" 
                                name="topic_modelling_type" 
                                value="concise" 
                                onClick={() => setTopicModellingType('concise')}
                            />
                            Concise Topics
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="topic_modelling_type" 
                                value="all_topics" 
                                onClick={() => setTopicModellingType('all_topics')}
                            />
                            All Topics
                        </label>
                    </div>
                    <div className="popup-actions">
                        <button onClick={() => setShowTopicModellingPopup(false)}>Close</button>
                    </div>
                </div>
            )}


            {/* Button to submit selected features */}
            <button className="submit-btn" onClick={handleMultiFeatureSubmit}>
                Analyze Selected Features
            </button>
        </div>
    );
}

export default MindMapPage;