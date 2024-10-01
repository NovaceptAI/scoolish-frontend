import React, { useState } from 'react';
import '../styles/WritingAssistant.css';

const WritingAssistantPage = () => {
    const [essayPrompt, setEssayPrompt] = useState('');
    const [essayText, setEssayText] = useState('');
    const [outline, setOutline] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [grammarCorrections, setGrammarCorrections] = useState([]);
    const [thesis, setThesis] = useState('');

    const handlePromptChange = (e) => {
        setEssayPrompt(e.target.value);
    };

    const handleEssayChange = (e) => {
        setEssayText(e.target.value);
    };

    const handleGenerateOutline = () => {
        // Generate an essay outline based on the essay prompt
        const generatedOutline = `Introduction\nThesis Statement\nBody Paragraph 1\nBody Paragraph 2\nConclusion`;
        setOutline(generatedOutline);
    };

    const handleThesisHelper = () => {
        // Help generate a thesis statement based on the essay prompt
        const thesisSuggestion = `This essay will argue that... (customize this based on your topic)`;
        setThesis(thesisSuggestion);
    };

    const handleGrammarCheck = () => {
        // Simulate a grammar check process and generate suggestions
        const corrections = ["Replace 'is' with 'are' in paragraph 2", "Consider rephrasing sentence 3 in paragraph 1"];
        setGrammarCorrections(corrections);
    };

    const handleSuggestions = () => {
        // Provide content suggestions based on the essay text
        const contentSuggestions = ["Add more examples in paragraph 1", "Expand on the thesis in the introduction"];
        setSuggestions(contentSuggestions);
    };

    return (
        <div className="writing-assistant-container">
            <h1>AI Writing Assistant for Essays</h1>

            {/* Essay Prompt Input */}
            <div className="prompt-section">
                <label>Enter Essay Prompt:</label>
                <textarea 
                    value={essayPrompt} 
                    onChange={handlePromptChange} 
                    placeholder="Enter your essay prompt here..." 
                    rows="4" 
                />
            </div>

            {/* Essay Text Input */}
            <div className="essay-section">
                <label>Your Essay:</label>
                <textarea 
                    value={essayText} 
                    onChange={handleEssayChange} 
                    placeholder="Start writing your essay..." 
                    rows="8" 
                />
            </div>

            {/* Buttons for Generating Outline, Thesis, and Suggestions */}
            <div className="tools-section-assistant">
                <button onClick={handleGenerateOutline}>Generate Outline</button>
                <button onClick={handleThesisHelper}>Thesis Statement Helper</button>
                <button onClick={handleSuggestions}>Get Content Suggestions</button>
                <button onClick={handleGrammarCheck}>Grammar Check</button>
            </div>

            {/* Display Generated Outline */}
            {outline && (
                <div className="outline-section">
                    <h3>Generated Outline</h3>
                    <p>{outline}</p>
                </div>
            )}

            {/* Display Thesis Statement */}
            {thesis && (
                <div className="thesis-section">
                    <h3>Thesis Statement</h3>
                    <p>{thesis}</p>
                </div>
            )}

            {/* Display Content Suggestions */}
            {suggestions.length > 0 && (
                <div className="suggestions-section">
                    <h3>Content Suggestions</h3>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display Grammar Corrections */}
            {grammarCorrections.length > 0 && (
                <div className="grammar-section">
                    <h3>Grammar Corrections</h3>
                    <ul>
                        {grammarCorrections.map((correction, index) => (
                            <li key={index}>{correction}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WritingAssistantPage;
