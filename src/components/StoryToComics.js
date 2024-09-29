import React, { useState } from 'react';
import '../styles/StoryToComics.css'; // General styling taken from previous files

function StoryToComics() {
    const [story, setStory] = useState('');
    const [prompt, setPrompt] = useState('');
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle story submission (send to API or process the story)
        console.log('Story Submitted:', { prompt, keyword, story });
        alert('Story submitted successfully!');
    };

    return (
        <div className="story-to-comics-page">
            <header className="header">
                <h1>Story to Comics Converter</h1>
            </header>

            <main className="content">
                <form onSubmit={handleSubmit}>
                    <div className="options-container">
                        <div className="input-container">
                            <label htmlFor="prompt">Story Prompt:</label>
                            <input 
                                type="text" 
                                id="prompt" 
                                value={prompt} 
                                onChange={(e) => setPrompt(e.target.value)} 
                                placeholder="Enter a prompt for your story..." 
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="keyword">Keyword Prompt:</label>
                            <input 
                                type="text" 
                                id="keyword" 
                                value={keyword} 
                                onChange={(e) => setKeyword(e.target.value)} 
                                placeholder="Enter keywords for inspiration..." 
                            />
                        </div>
                    </div>

                    <div className="story-input-container">
                        <label htmlFor="story">Your Story (Max 300 words):</label>
                        <textarea 
                            id="story" 
                            value={story} 
                            onChange={(e) => setStory(e.target.value)} 
                            maxLength="300"
                            placeholder="Write your story here..." 
                            className="story-textarea"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Convert to Comics</button>
                </form>
            </main>
        </div>
    );
}

export default StoryToComics;
