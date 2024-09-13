import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles/MindMapPage.css';

function MindMapPage() {
    const features = [
        { name: "Summarization", route: "/summarization" },
        { name: "Translation", route: "/translation" },
        { name: "Segmentation", route: "/segmentation" },
        { name: "Entity Resolution", route: "/entity_resolution" },
        { name: "Sentiment Analysis", route: "/sentiment_analysis" },
        { name: "Topic Modelling", route: "/topic_modelling" },
        { name: "Chronology", route: "/chronology" },
        { name: "Similarity", route: "/similarity" }
    ];

    const [layout, setLayout] = useState('circle'); // Default to circle layout
    const [selectedFeatures, setSelectedFeatures] = useState([]); // Track selected features
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English
    const [showDropdown, setShowDropdown] = useState(false); // Toggle for showing the dropdown
    const navigate = useNavigate(); // Hook for navigation

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'Hindi' },
        { code: 'fr', name: 'French' },
        { code: 'es', name: 'Spanish' },
        { code: 'de', name: 'German' },
        { code: 'zh', name: 'Chinese' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
        { code: 'ru', name: 'Russian' },
        { code: 'it', name: 'Italian' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'ar', name: 'Arabic' },
        { code: 'bn', name: 'Bengali' },
        { code: 'ta', name: 'Tamil' },
        { code: 'te', name: 'Telugu' },
        { code: 'vi', name: 'Vietnamese' },
        { code: 'ms', name: 'Malay' }
    ];

    // Handle selecting multiple features
    const handleFeatureSelect = (feature) => {
        if (selectedFeatures.includes(feature)) {
            // Deselect feature if already selected
            setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
        } else {
            // Add feature to selected list
            setSelectedFeatures([...selectedFeatures, feature]);
            if (feature.name === 'Translation') {
                setShowDropdown(true); // Show language dropdown for translation
            }
        }
    };

    // Handle language selection change
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    // Handler to send the selected features and language to the endpoint
    const handleMultiFeatureSubmit = () => {
        if (selectedFeatures.length > 0) {
            // Prepare the payload
            const payload = {
                selectedFeatures,
                selectedLanguage
            };

            // Send a POST request to the endpoint
            fetch('http://192.168.1.5:5000/documents/analyze_models', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),  // Convert payload to JSON string
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Redirect or do something with the response, if needed
                navigate('/multifeature', { state: { selectedFeatures, selectedLanguage, analysisResult: data } });  // Example redirect
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                        onChange={() => handleFeatureSelect(feature.name)}  // Store feature name instead of full feature object
                        checked={selectedFeatures.includes(feature.name)}  // Compare using the feature name
                    />
                    <label htmlFor={`feature-${index}`} style={{ cursor: 'pointer' }}>
                        {feature.name}
                    </label>
                </div>
                
                ))}
            </div>

            {/* Language Dropdown for Translation */}
            {showDropdown && (
                <div className="dropdown-container">
                    <h3>Select Translation Language</h3>
                    <select value={selectedLanguage} onChange={handleLanguageChange}>
                        {languages.map((language, index) => (
                            <option key={index} value={language.code}>
                                {language.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Button to navigate to multi-feature page */}
            <button className="submit-btn" onClick={handleMultiFeatureSubmit}>
                Analyze Selected Features
            </button>
        </div>
    );
}

export default MindMapPage;
