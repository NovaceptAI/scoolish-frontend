import React, { useState, useRef, useEffect } from 'react';
import { Chart, ArcElement, BarElement, LineElement, PieController, CategoryScale, BarController, LineController } from 'chart.js';
import '../styles/VisualStudyGuideMaker.css';

Chart.register(ArcElement, BarElement, LineElement, CategoryScale, PieController, BarController, LineController);

const VisualStudyGuideMaker = () => {
  const [inputText, setInputText] = useState('');
  const [selectedVisualization, setSelectedVisualization] = useState('pie');
  const [generatedData, setGeneratedData] = useState(null);
  const chartRef = useRef(null); // Ref for the canvas element
  const chartInstanceRef = useRef(null); // Ref to store the Chart.js instance

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleVisualizationChange = (e) => {
    setSelectedVisualization(e.target.value);
  };

  const handleGenerate = () => {
    if (inputText) {
      // Dummy data generation for demo purposes
      const data = {
        labels: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
        datasets: [
          {
            data: [25, 35, 20, 20],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
            hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
          },
        ],
      };
      setGeneratedData(data);
    }
  };

  useEffect(() => {
    // Clean up the previous chart before re-rendering
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (generatedData && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Create new chart based on the selected visualization
      chartInstanceRef.current = new Chart(ctx, {
        type: selectedVisualization,
        data: generatedData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    // Cleanup chart instance on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [generatedData, selectedVisualization]);

  return (
    <div className="visual-study-guide-container">
      <header>
        <h1>Visual Study Guide Maker</h1>
      </header>

      <div className="study-guide-form">
        <label htmlFor="study-material">
          Enter your study material or key points:
        </label>
        <textarea
          id="study-material"
          placeholder="Type or paste your notes here..."
          value={inputText}
          onChange={handleInputChange}
        />

        <label htmlFor="visual-type">
          Select a visual format:
        </label>
        <select
          id="visual-type"
          value={selectedVisualization}
          onChange={handleVisualizationChange}
        >
          <option value="pie">Pie Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="line">Line Graph</option>
          <option value="infographic">Infographic</option>
        </select>

        <button onClick={handleGenerate}>
          Generate Visual Study Guide
        </button>
      </div>

      <div className="visualization-result">
        {generatedData ? (
          <>
            <h2>Generated Visual Guide</h2>
            {selectedVisualization !== 'infographic' && (
              <canvas ref={chartRef} className="chart-canvas" />
            )}
            {selectedVisualization === 'infographic' && (
              <div className="infographic">
                <p>Infographic representing: {inputText}</p>
                {/* Infographic could be built dynamically here */}
              </div>
            )}
          </>
        ) : (
          <p>No visual guide generated yet. Enter your notes and select a format.</p>
        )}
      </div>
    </div>
  );
};

export default VisualStudyGuideMaker;
