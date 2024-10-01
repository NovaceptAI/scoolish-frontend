import React, { useState } from 'react';
import '../styles/VirtualScienceLab.css';

const VirtualScienceLab = () => {
    const [experiment, setExperiment] = useState('');

    const experiments = {
        Physics: ['Free Fall', 'Projectile Motion', 'Electric Circuits', 'Optics'],
        Chemistry: ['Titration', 'pH Level Testing', 'Chemical Reactions', 'Electrolysis'],
        Biology: ['Microscopy', 'DNA Extraction', 'Dissections', 'Genetic Engineering'],
    };

    return (
        <div className="virtual-lab-container">
            <h1>Virtual Science Lab</h1>
            <div className="experiment-selection">
                <h2>Select a Subject</h2>
                <div className="subject-options">
                    {Object.keys(experiments).map((subject) => (
                        <button key={subject} onClick={() => setExperiment(subject)}>
                            {subject}
                        </button>
                    ))}
                </div>
            </div>

            {experiment && (
                <div className="experiment-list">
                    <h3>{experiment} Experiments</h3>
                    <ul>
                        {experiments[experiment].map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="lab-workspace">
                {experiment && <h2>{experiment} Lab Workspace</h2>}
                {/* Display interactive tools here */}
                {/* Example: <img src="/static/physics_lab.png" alt="Physics Lab Workspace" /> */}
            </div>
        </div>
    );
};

export default VirtualScienceLab;
