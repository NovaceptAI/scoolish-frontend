import React, { useState } from 'react';
import '../styles/ComicStripBuilder.css'; // Ensure this file exists

const ComicStripBuilder = () => {
  const [panels, setPanels] = useState([]);
  const [currentPanel, setCurrentPanel] = useState({
    characters: [],
    setting: '',
    dialogue: [],
  });

  const handleAddPanel = () => {
    setPanels([...panels, currentPanel]);
    setCurrentPanel({ characters: [], setting: '', dialogue: [] });
  };

  const handleCharacterChange = (index, newCharacter) => {
    const updatedCharacters = [...currentPanel.characters];
    updatedCharacters[index] = newCharacter;
    setCurrentPanel({ ...currentPanel, characters: updatedCharacters });
  };

  const handleSettingChange = (e) => {
    setCurrentPanel({ ...currentPanel, setting: e.target.value });
  };

  const handleDialogueChange = (index, newDialogue) => {
    const updatedDialogue = [...currentPanel.dialogue];
    updatedDialogue[index] = newDialogue;
    setCurrentPanel({ ...currentPanel, dialogue: updatedDialogue });
  };

  return (
    <div className="comic-strip-builder-container">
      <header>
        <h1>Interactive Comic Strip Builder</h1>
      </header>

      <div className="panel-builder">
        <h2>Build Your Panel</h2>

        <label htmlFor="setting">Select a Setting:</label>
        <select id="setting" value={currentPanel.setting} onChange={handleSettingChange}>
          <option value="">Select a Setting</option>
          <option value="city">City</option>
          <option value="forest">Forest</option>
          <option value="classroom">Classroom</option>
          <option value="space">Space</option>
        </select>

        {currentPanel.characters.map((character, index) => (
          <div key={index}>
            <label htmlFor={`character-${index}`}>Select Character {index + 1}:</label>
            <select
              id={`character-${index}`}
              value={character}
              onChange={(e) => handleCharacterChange(index, e.target.value)}
            >
              <option value="">Select a Character</option>
              <option value="hero">Hero</option>
              <option value="villain">Villain</option>
              <option value="sidekick">Sidekick</option>
              <option value="alien">Alien</option>
            </select>

            <label htmlFor={`dialogue-${index}`}>Dialogue {index + 1}:</label>
            <input
              type="text"
              id={`dialogue-${index}`}
              value={currentPanel.dialogue[index] || ''}
              onChange={(e) => handleDialogueChange(index, e.target.value)}
            />
          </div>
        ))}

        <button onClick={() => handleCharacterChange(currentPanel.characters.length, '')}>
          Add Character
        </button>
        <button onClick={handleAddPanel}>Add Panel</button>
      </div>

      <div className="comic-preview">
        <h2>Preview Your Comic Strip</h2>
        <div className="comic-strip">
          {panels.map((panel, index) => (
            <div key={index} className="comic-panel">
              <p><strong>Setting:</strong> {panel.setting}</p>
              {panel.characters.map((character, i) => (
                <div key={i}>
                  <p><strong>Character:</strong> {character}</p>
                  <p><strong>Dialogue:</strong> {panel.dialogue[i]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="save-options">
        <button>Save Comic</button>
        <button>Export as PDF</button>
      </div>
    </div>
  );
};

export default ComicStripBuilder;
