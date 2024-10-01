import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Cone, OrbitControls } from '@react-three/drei';
import '../styles/3DModelBuilder.css';

const ModelBuilder = () => {
  const [shape, setShape] = useState('box');
  const [color, setColor] = useState('#ff0000');
  const [size, setSize] = useState(1);

  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(parseFloat(event.target.value));
  };

  return (
    <div className="model-builder-container">
      <header>
        <h1>3D Model Builder</h1>
      </header>

      <div className="builder-controls">
        <label>
          <span>Select Shape:</span>
          <select value={shape} onChange={handleShapeChange}>
            <option value="box">Box</option>
            <option value="sphere">Sphere</option>
            <option value="cylinder">Cylinder</option>
            <option value="cone">Cone</option>
          </select>
        </label>

        <label>
          <span>Select Color:</span>
          <input type="color" value={color} onChange={handleColorChange} />
        </label>

        <label>
          <span>Size:</span>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={size}
            onChange={handleSizeChange}
          />
        </label>
      </div>

      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />

        {shape === 'box' && (
          <Box args={[size, size, size]}>
            <meshStandardMaterial color={color} />
          </Box>
        )}

        {shape === 'sphere' && (
          <Sphere args={[size, 32, 32]}>
            <meshStandardMaterial color={color} />
          </Sphere>
        )}

        {shape === 'cylinder' && (
          <Cylinder args={[size, size, size * 2, 32]}>
            <meshStandardMaterial color={color} />
          </Cylinder>
        )}

        {shape === 'cone' && (
          <Cone args={[size, size * 2, 32]}>
            <meshStandardMaterial color={color} />
          </Cone>
        )}
      </Canvas>
    </div>
  );
};

export default ModelBuilder;
