import React, { useState, useEffect } from 'react';
import '../styles/CollaborativeMindMappingTool.css';

const CollaborativeMindMappingTool = () => {
  const [nodes, setNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState('');
  const [connections, setConnections] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  // Add a new node
  const handleAddNode = () => {
    if (currentNode.trim()) {
      setNodes([...nodes, { id: nodes.length + 1, label: currentNode }]);
      setCurrentNode('');
    }
  };

  // Handle node connection
  const handleConnectNodes = (node1Id, node2Id) => {
    setConnections([...connections, { from: node1Id, to: node2Id }]);
  };

  return (
    <div className="mind-mapping-tool">
      <header className="header">
        <h1>Collaborative Mind Mapping Tool</h1>
      </header>

      <div className="tool-container">
        <div className="mind-map-area">
          {/* Nodes Display */}
          <div className="nodes">
            {nodes.map(node => (
              <div
                key={node.id}
                className={`node ${selectedNode === node.id ? 'selected' : ''}`}
                onClick={() => setSelectedNode(node.id)}
              >
                {node.label}
              </div>
            ))}
          </div>
          {/* Connections Display */}
          <div className="connections">
            {connections.map((connection, index) => (
              <div key={index} className="connection-line">
                Connects Node {connection.from} to Node {connection.to}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <input
            type="text"
            placeholder="Add a new idea"
            value={currentNode}
            onChange={(e) => setCurrentNode(e.target.value)}
          />
          <button onClick={handleAddNode} className="colab-btn">Add Node</button>
          
          {selectedNode && (
            <>
              <button
                onClick={() => handleConnectNodes(selectedNode, prompt('Enter node ID to connect to'))}
                className="colab-btn"
              >
                Connect Node
              </button>
              <button onClick={() => setSelectedNode(null)} className="colab-btn">
                Deselect Node
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollaborativeMindMappingTool;
