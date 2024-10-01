import React, { useState } from 'react';
import '../styles/LanguageLearningGames.css'; // Ensure this file exists

const LanguageLearningGames = () => {
  const [gameType, setGameType] = useState('vocabulary'); // Default game type
  const [language, setLanguage] = useState('Spanish'); // Default language
  const [difficulty, setDifficulty] = useState('easy'); // Default difficulty
  const [customTopic, setCustomTopic] = useState('');

  const handleGameTypeChange = (event) => {
    setGameType(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleCustomTopicChange = (event) => {
    setCustomTopic(event.target.value);
  };

  const startGame = () => {
    // Logic for starting the selected game type, language, and difficulty
    console.log(`Starting ${gameType} game in ${language} at ${difficulty} difficulty with topic: ${customTopic}`);
  };

  return (
    <div className="language-learning-container">
      <header>
        <h1>Language Learning Games</h1>
      </header>

      <div className="game-setup">
        <label>
          Select Game Type:
          <select value={gameType} onChange={handleGameTypeChange}>
            <option value="vocabulary">Vocabulary Building</option>
            <option value="sentenceFormation">Sentence Formation</option>
            <option value="conversation">Conversational Practice</option>
          </select>
        </label>

        <label>
          Select Language:
          <select value={language} onChange={handleLanguageChange}>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
          </select>
        </label>

        <label>
          Select Difficulty:
          <select value={difficulty} onChange={handleDifficultyChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <label>
          Custom Topic (optional):
          <input
            type="text"
            placeholder="Enter custom topic (e.g., Animals, Food)"
            value={customTopic}
            onChange={handleCustomTopicChange}
          />
        </label>

        <button className="start-btn" onClick={startGame}>
          Start Game
        </button>
      </div>

      <div className="game-instructions">
        <h3>How to Play:</h3>
        <p>Choose a game type, language, and difficulty, then press "Start Game" to begin your language learning journey!</p>
        <ul>
          <li><strong>Vocabulary Building:</strong> Match words with their correct translations.</li>
          <li><strong>Sentence Formation:</strong> Drag and drop words to form correct sentences.</li>
          <li><strong>Conversational Practice:</strong> Respond to AI prompts in the target language.</li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageLearningGames;
