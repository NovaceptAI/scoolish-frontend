import React, { useState } from 'react';
import '../styles/CodePlayground.css';

const CodePlayground = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const runCode = () => {
    try {
      if (language === 'javascript') {
        // Using eval for simple JS code execution (not recommended in production)
        setOutput(eval(code));
      } else if (language === 'python') {
        // Use an external API or library like Pyodide for Python execution
        setError('Python execution is not supported locally. Use an API or external tool.');
      }
      setError('');
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
    setError('');
  };

  return (
    <div className="code-playground-container">
      <header>
        <h1>Code Playground for Kids</h1>
      </header>

      <div className="playground-controls">
        <label htmlFor="language-select">Choose a Language:</label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>

      <div className="code-editor">
        <label htmlFor="code-input">Write your code below:</label>
        <textarea
          id="code-input"
          value={code}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
        ></textarea>
      </div>

      <div className="playground-buttons">
        <button onClick={runCode}>Run Code</button>
        <button onClick={clearCode}>Clear</button>
      </div>

      <div className="output-console">
        <h3>Output:</h3>
        {error && <p className="error-message">{error}</p>}
        {output && <pre>{output}</pre>}
      </div>

      <div className="code-hints">
        <h3>Code Hints:</h3>
        {language === 'javascript' && (
          <ul>
            <li>Try: <code>console.log("Hello, World!");</code></li>
            <li>Use <code>let</code> and <code>const</code> to declare variables.</li>
            <li>Example: <code>let x = 5; let y = 10; console.log(x + y);</code></li>
          </ul>
        )}
        {language === 'python' && (
          <ul>
            <li>Try: <code>print("Hello, World!")</code></li>
            <li>Use <code>x = 5</code> and <code>y = 10</code> to declare variables.</li>
            <li>Example: <code>print(x + y)</code></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CodePlayground;
