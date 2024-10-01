import React, { useState } from 'react';
import { Line } from 'react-chartjs-2'; // For visualizing graphs
import { MathComponent } from 'mathjax-react'; // For rendering mathematical equations
import '../styles/MathProblemVisualizer.css'; // Ensure this file exists

const MathProblemVisualizer = () => {
  const [problem, setProblem] = useState('');
  const [solutionSteps, setSolutionSteps] = useState([]);
  const [graphData, setGraphData] = useState(null);

  const handleProblemSubmit = (e) => {
    e.preventDefault();

    // Example processing (in a real app, you'd process the math problem here)
    const steps = [
      "Step 1: Identify the problem",
      "Step 2: Apply the formula",
      "Step 3: Simplify the equation",
      "Step 4: Solve for the variable",
    ];
    
    setSolutionSteps(steps);

    // Example graph data for y = x^2
    const data = {
      labels: [-3, -2, -1, 0, 1, 2, 3],
      datasets: [
        {
          label: 'y = x^2',
          data: [9, 4, 1, 0, 1, 4, 9],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        },
      ],
    };

    setGraphData(data);
  };

  return (
    <div className="math-visualizer-container">
      <header className="header">
        <h1>Math Problem Visualizer</h1>
      </header>

      <div className="problem-input">
        <form onSubmit={handleProblemSubmit}>
          <label>
            Enter Math Problem:
            <input
              type="text"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="e.g., y = x^2"
            />
          </label>
          <button className="btn" type="submit">Visualize Solution</button>
        </form>
      </div>

      {/* Display solution steps */}
      {solutionSteps.length > 0 && (
        <div className="solution-steps">
          <h3>Solution Steps:</h3>
          <ul>
            {solutionSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display graph */}
      {graphData && (
        <div className="graph">
          <h3>Graph:</h3>
          <Line data={graphData} />
        </div>
      )}

      {/* Example rendering of a math equation */}
      <div className="math-equation">
        <h3>Rendered Math Equation:</h3>
        <MathComponent tex={String.raw`y = x^2`} />
      </div>
    </div>
  );
};

export default MathProblemVisualizer;
