import React, { useState, useEffect } from 'react';
import '../styles/CreativeWritingPrompts.css';

const CreativeWritingPrompts = () => {
    const [prompt, setPrompt] = useState('');
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('');

    const generatePrompt = () => {
        // Simulate an API call for generating a new creative prompt
        const prompts = [
            "Write a story about a world where time moves backward.",
            "Imagine you're a detective solving a mystery in space.",
            "Describe a day in the life of a superhero who lost their powers.",
            "Write about an animal that can talk and the adventures they go on.",
            "Create a fantasy world where music controls the weather."
        ];
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setPrompt(randomPrompt);
        setFeedback('');
        setUserInput('');
    };

    useEffect(() => {
        generatePrompt();
    }, []);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const submitStory = () => {
        if (userInput.trim()) {
            // Simulate AI feedback
            const feedbackMessages = [
                "Great use of imagination! Try adding more details about the character's emotions.",
                "You have a strong narrative structure. Consider expanding on the setting.",
                "Your dialogue is engaging. Add more actions to make the scenes more dynamic."
            ];
            const randomFeedback = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
            setFeedback(randomFeedback);
        } else {
            setFeedback("Please write a story to get feedback.");
        }
    };

    return (
        <div className="creative-writing-container">
            <h1>Creative Writing Prompts</h1>
            <div className="prompt-box">
                <h2>Today's Prompt</h2>
                <p>{prompt}</p>
                <button onClick={generatePrompt}>Get New Prompt</button>
            </div>

            <div className="writing-box">
                <textarea
                    placeholder="Start writing your story here..."
                    value={userInput}
                    onChange={handleInputChange}
                />
                <button onClick={submitStory}>Submit Story</button>
            </div>

            {feedback && (
                <div className="feedback-box">
                    <h3>AI Feedback:</h3>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default CreativeWritingPrompts;
