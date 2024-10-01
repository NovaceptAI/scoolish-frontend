import React, { useState, useRef, useEffect } from 'react';
import '../styles/LearnByDrawing.css'; // Make sure this file exists

const LearnByDrawing = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedTool, setSelectedTool] = useState('pencil');
  const [feedback, setFeedback] = useState('');

  // Initialize the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);
  }, []);

  // Handle drawing on the canvas
  const startDrawing = (e) => {
    setDrawing(true);
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!drawing) return;
    context.strokeStyle = selectedColor;
    context.lineWidth = selectedTool === 'eraser' ? 10 : 2;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
    context.closePath();
  };

  // Clear the canvas
  const clearCanvas = () => {
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  // Handle feedback (simulated AI feedback for now)
  const handleFeedback = () => {
    const feedbackMessages = [
      'Great job on the diagram!',
      'Try adding more details to the labels.',
      'The structure looks good, but check your proportions.',
      'Excellent work! Keep practicing.'
    ];
    setFeedback(feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)]);
  };

  return (
    <div className="learn-by-drawing">
      <header>
        <h1>Learn by Drawing</h1>
      </header>

      <main>
        <div className="toolbox">
          <label>
            Color: 
            <input 
              type="color" 
              value={selectedColor} 
              onChange={(e) => setSelectedColor(e.target.value)} 
            />
          </label>
          <button onClick={() => setSelectedTool('pencil')}>Pencil</button>
          <button onClick={() => setSelectedTool('eraser')}>Eraser</button>
          <button onClick={clearCanvas}>Clear Canvas</button>
        </div>

        <div className="canvas-container">
          <canvas 
            ref={canvasRef} 
            width={800} 
            height={500} 
            onMouseDown={startDrawing} 
            onMouseMove={draw} 
            onMouseUp={stopDrawing} 
            onMouseLeave={stopDrawing} 
          ></canvas>
        </div>

        <div className="feedback-section">
          <button onClick={handleFeedback}>Get AI Feedback</button>
          {feedback && <p>{feedback}</p>}
        </div>
      </main>
    </div>
  );
};

export default LearnByDrawing;
