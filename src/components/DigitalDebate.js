import React, { useState } from 'react';
import '../styles/DigitalDebate.css'; // Ensure this file exists

const DigitalDebatePlatform = () => {
  const [debateTopic, setDebateTopic] = useState('');
  const [argumentsFor, setArgumentsFor] = useState([]);
  const [argumentsAgainst, setArgumentsAgainst] = useState([]);
  const [newArgument, setNewArgument] = useState('');
  const [side, setSide] = useState('for');

  const handleAddArgument = () => {
    if (newArgument.trim() === '') return;

    if (side === 'for') {
      setArgumentsFor([...argumentsFor, { text: newArgument, votes: 0 }]);
    } else {
      setArgumentsAgainst([...argumentsAgainst, { text: newArgument, votes: 0 }]);
    }
    setNewArgument('');
  };

  const handleVote = (index, side) => {
    if (side === 'for') {
      const updatedArguments = [...argumentsFor];
      updatedArguments[index].votes += 1;
      setArgumentsFor(updatedArguments);
    } else {
      const updatedArguments = [...argumentsAgainst];
      updatedArguments[index].votes += 1;
      setArgumentsAgainst(updatedArguments);
    }
  };

  return (
    <div className="digital-debate-platform">
      <header>
        <h1>Digital Debate Platform</h1>
      </header>

      <main>
        <div className="debate-topic-section">
          <h2>Create Debate Topic</h2>
          <input
            type="text"
            placeholder="Enter a debate topic"
            value={debateTopic}
            onChange={(e) => setDebateTopic(e.target.value)}
          />
        </div>

        <div className="add-argument-section">
          <h2>Add an Argument</h2>
          <textarea
            value={newArgument}
            onChange={(e) => setNewArgument(e.target.value)}
            placeholder="Write your argument here..."
          ></textarea>
          <div className="side-selection">
            <label>
              <input
                type="radio"
                value="for"
                checked={side === 'for'}
                onChange={() => setSide('for')}
              />
              For
            </label>
            <label>
              <input
                type="radio"
                value="against"
                checked={side === 'against'}
                onChange={() => setSide('against')}
              />
              Against
            </label>
          </div>
          <button onClick={handleAddArgument}>Add Argument</button>
        </div>

        <div className="debate-section">
          <h2>Debate: {debateTopic}</h2>
          <div className="arguments">
            <div className="arguments-for">
              <h3>Arguments For</h3>
              {argumentsFor.map((arg, index) => (
                <div key={index} className="argument-item">
                  <p>{arg.text}</p>
                  <button onClick={() => handleVote(index, 'for')}>Vote For</button>
                  <span>Votes: {arg.votes}</span>
                </div>
              ))}
            </div>

            <div className="arguments-against">
              <h3>Arguments Against</h3>
              {argumentsAgainst.map((arg, index) => (
                <div key={index} className="argument-item">
                  <p>{arg.text}</p>
                  <button onClick={() => handleVote(index, 'against')}>Vote Against</button>
                  <span>Votes: {arg.votes}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fact-check-section">
          <h2>Real-Time Fact Checking</h2>
          <p>Fact-checking will be implemented to help validate arguments.</p>
        </div>
      </main>
    </div>
  );
};

export default DigitalDebatePlatform;
