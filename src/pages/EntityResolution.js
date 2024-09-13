import React from 'react';
import '../styles/EntityResolutionPage.css'; // Assuming this CSS file exists

function EntityResolutionPage() {
    // Dummy data for entities and their resolution
    const entities = [
        { type: "Person", original: "J. Smith", resolved: "John Smith" },
        { type: "Company", original: "IBM Corp.", resolved: "IBM Corporation" },
        { type: "Location", original: "NYC", resolved: "New York City" },
        { type: "Date", original: "10/12/21", resolved: "October 12, 2021" },
        { type: "Product", original: "iPhone", resolved: "Apple iPhone 12" }
    ];

    return (
        <div className="entity-resolution-page">
            <div className="document-section">
                <img src="/static/test_23.jpg" alt="Document Preview" />
                <p>Document: Business Contract</p>
            </div>
            <div className="entities-section">
                <h3>Resolved Entities</h3>
                <table className="entities-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Original</th>
                            <th>Resolved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entities.map((entity, index) => (
                            <tr key={index}>
                                <td>{entity.type}</td>
                                <td>{entity.original}</td>
                                <td>{entity.resolved}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EntityResolutionPage;
