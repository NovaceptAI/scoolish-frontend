import React, { useState } from 'react';
import '../styles/VirtualFieldTrips.css'; // Ensure this file exists

const VirtualFieldTrips = () => {
  const [category, setCategory] = useState('history'); // Default trip category
  const [destination, setDestination] = useState(''); // Selected destination
  const [isTripStarted, setIsTripStarted] = useState(false); // Controls if the trip has started

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setDestination(''); // Reset destination on category change
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const startTrip = () => {
    setIsTripStarted(true);
  };

  const categories = {
    history: ['Great Wall of China', 'Pyramids of Giza', 'Colosseum'],
    science: ['NASA Space Center', 'LHC at CERN', 'The Amazon Rainforest'],
    geography: ['Mount Everest', 'Grand Canyon', 'Sahara Desert'],
  };

  return (
    <div className="virtual-field-trips-container">
      <header>
        <h1>Virtual Field Trips</h1>
      </header>

      {!isTripStarted ? (
        <div className="trip-setup">
          <label>
            Select Category:
            <select value={category} onChange={handleCategoryChange}>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="geography">Geography</option>
            </select>
          </label>

          {category && (
            <label>
              Select Destination:
              <select value={destination} onChange={handleDestinationChange}>
                <option value="">Select a Destination</option>
                {categories[category].map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </select>
            </label>
          )}

          <button className="start-btn" onClick={startTrip} disabled={!destination}>
            Start Trip
          </button>
        </div>
      ) : (
        <div className="trip-viewer">
          <h2>{destination}</h2>
          <iframe
            title={destination}
            src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=0,0&zoom=10`}
            width="100%"
            height="500"
            allowFullScreen
          ></iframe>
          <div className="trip-info">
            <h3>Interactive Points of Interest</h3>
            <p>Click on the markers for more information about {destination}.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualFieldTrips;
