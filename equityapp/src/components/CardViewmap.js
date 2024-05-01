import React from 'react';

const CardView = ({ filteredMarkers }) => {
  return (
    <div className="card-view-container">
      <div className="card-list">
        {filteredMarkers.map((marker, index) => (
          <div className="mapcard" key={index}>
            {/* Render card content here */}
            <h3>{marker.name}</h3>
            <p>Category: {marker.category}</p>
            <p>Address: {marker.address}</p>
            <p>Tags: {marker.tag}</p>
            <a href={marker.link} target="_blank" rel="noopener noreferrer">More Info</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
