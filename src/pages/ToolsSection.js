import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ToolsSection.css'; // Ensure you create this CSS file for styling

const ToolsSection = () => {
    const tools = [
        {
            title: "Story to Comics Converter",
            description: "Convert short stories into comics with AI-generated illustrations.",
            link: "/story-to-comics",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "AI-Powered Homework Helper",
            description: "Get hints or breakdowns for complex problems.",
            link: "/homework-helper",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Interactive Quiz Creator",
            description: "Create quizzes and games from study materials.",
            link: "/quiz-creator",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Virtual Science Lab",
            description: "Simulate science experiments in a virtual environment.",
            link: "/virtual-science-lab",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "AI Writing Assistant for Essays",
            description: "Get suggestions for outlines, structure, and grammar for essays.",
            link: "/writing-assistant",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Learn by Drawing",
            description: "Draw diagrams or concepts and have AI evaluate them.",
            link: "/learn-by-drawing",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Digital Debate Platform",
            description: "Engage in debates on current events or educational topics.",
            link: "/digital-debate",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "3D Model Builder",
            description: "Create 3D models of historical landmarks, molecular structures, or inventions.",
            link: "/3d-model-builder",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Language Learning Games",
            description: "Gamified language learning activities like vocabulary building and sentence formation.",
            link: "/language-learning-games",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Virtual Field Trips",
            description: "Take students on a virtual tour of historical sites and natural wonders.",
            link: "/virtual-field-trips",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Collaborative Mind Mapping",
            description: "Create collaborative mind maps for group projects or brainstorming.",
            link: "/collaborative-mind-mapping",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Math Problem Visualizer",
            description: "Solve math problems and visualize the step-by-step breakdown.",
            link: "/math-problem-visualizer",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Creative Writing Prompts",
            description: "Get daily creative writing prompts and feedback.",
            link: "/creative-writing-prompts",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Historical Timeline Builder",
            description: "Create dynamic historical timelines and learn history chronologically.",
            link: "/historical-timeline-builder",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Visual Study Guide Maker",
            description: "Create visually appealing study guides with charts and diagrams.",
            link: "/visual-study-guide-maker",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Code Playground for Kids",
            description: "A coding environment for kids to write basic code and solve challenges.",
            link: "/code-playground-for-kids",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Music to Study By",
            description: "AI-generated study playlists to help students focus while studying.",
            link: "/music-to-study-by",
            imgSrc: "/static/tools_icon.webp"
        },
        {
            title: "Interactive Comic Strip Builder",
            description: "Design and create your own comic strips using AI-generated elements.",
            link: "/interactive-comic-strip-builder",
            imgSrc: "/static/tools_icon.webp"
        }
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
