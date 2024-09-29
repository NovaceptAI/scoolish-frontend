import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ToolsSection.css'; // Ensure you create this CSS file for styling

const ToolsSection = () => {
    const tools = [
        {
            title: "Story to Comics Converter",
            description: "Convert short stories into comics with AI-generated illustrations.",
            link: "/story-to-comics",
            imgSrc: "/static/comics_icon.jpg"
        },
        {
            title: "AI-Powered Homework Helper",
            description: "Get hints or breakdowns for complex problems.",
            link: "/homework-helper",
            imgSrc: "/static/homework_helper_icon.jpg"
        },
        {
            title: "Interactive Quiz Creator",
            description: "Create quizzes and games from study materials.",
            link: "/quiz-creator",
            imgSrc: "/static/quiz_creator_icon.jpg"
        },
        {
            title: "Virtual Science Lab",
            description: "Simulate science experiments in a virtual environment.",
            link: "/virtual-science-lab",
            imgSrc: "/static/science_lab_icon.jpg"
        },
        {
            title: "AI Writing Assistant for Essays",
            description: "Get suggestions for outlines, structure, and grammar for essays.",
            link: "/writing-assistant",
            imgSrc: "/static/writing_assistant_icon.jpg"
        },
        {
            title: "Learn by Drawing",
            description: "Draw diagrams or concepts and have AI evaluate them.",
            link: "/learn-by-drawing",
            imgSrc: "/static/drawing_icon.jpg"
        },
    ];

    return (
        <div className="tools-section">
            <h2>Cool Tools for Learning</h2>
            <div className="tools-grid">
                {tools.map((tool, index) => (
                    <div key={index} className="tool-card">
                        <Link to={tool.link}>
                            <img src={tool.imgSrc} alt={tool.title} className="tool-image" />
                            <div className="tool-content">
                                <h3>{tool.title}</h3>
                                <p>{tool.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsSection;
