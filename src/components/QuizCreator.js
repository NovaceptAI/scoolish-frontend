import React, { useState } from 'react';
import '../styles/QuizCreator.css'; // Importing the CSS file

const QuizCreator = () => {
    const [subject, setSubject] = useState('');
    const [subSubject, setSubSubject] = useState('');
    const [customTopic, setCustomTopic] = useState('');
    const [numQuestions, setNumQuestions] = useState(5);

    const subjects = {
        Geography: ['Asia', 'America', 'Europe', 'Africa'],
        Science: ['Physics', 'Chemistry', 'Biology'],
        Math: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
        History: ['World War I', 'Renaissance', 'Ancient Civilizations'],
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quiz Details:', { subject, subSubject, customTopic, numQuestions });
        // Add API or processing logic here
    };

    return (
        <div className="quiz-creator-container">
            <h1 className="quiz-title">Interactive Quiz Creator</h1>

            <form className="quiz-form" onSubmit={handleSubmit}>
                {/* Subject Selection */}
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
                        <option value="">Select Subject</option>
                        {Object.keys(subjects).map((subject, index) => (
                            <option key={index} value={subject}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sub-Subject Selection */}
                {subject && (
                    <div className="form-group">
                        <label htmlFor="subSubject">Sub-Subject:</label>
                        <select
                            id="subSubject"
                            value={subSubject}
                            onChange={(e) => setSubSubject(e.target.value)}
                        >
                            <option value="">Select Sub-Subject</option>
                            {subjects[subject].map((subSubject, index) => (
                                <option key={index} value={subSubject}>
                                    {subSubject}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Custom Topic Input */}
                <div className="form-group">
                    <label htmlFor="customTopic">Custom Topic (Optional):</label>
                    <input
                        id="customTopic"
                        type="text"
                        placeholder="Enter a custom topic"
                        value={customTopic}
                        onChange={(e) => setCustomTopic(e.target.value)}
                    />
                </div>

                {/* Number of Questions */}
                <div className="form-group">
                    <label htmlFor="numQuestions">Number of Questions:</label>
                    <select
                        id="numQuestions"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                    Create Quiz
                </button>
            </form>
        </div>
    );
};

export default QuizCreator;
