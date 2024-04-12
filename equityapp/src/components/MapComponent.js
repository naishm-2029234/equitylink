import React, { useEffect } from 'react';
import { initializeMap } from '../components/d3map/main';
import '../MapComponent.css';

// Load Leaflet CSS
const leafletCSS = document.createElement('link');
leafletCSS.rel = 'stylesheet';
leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
document.head.appendChild(leafletCSS);

// Load Leaflet JavaScript
const leafletJS = document.createElement('script');
leafletJS.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
leafletJS.async = true;
leafletJS.onload = () => {
    // Leaflet is loaded, you can start initializing your map
};
document.head.appendChild(leafletJS);

// Load D3.js
const d3JS = document.createElement('script');
d3JS.src = 'https://d3js.org/d3.v7.min.js';
d3JS.async = true;
d3JS.onload = () => {
    // D3.js is loaded, you can use it in your map initialization
};
document.head.appendChild(d3JS);


function MapComponent() {
    useEffect(() => {
        const map = initializeMap(); // Call initializeMap function when component mounts
        // Optionally, you can perform additional map configuration or add event listeners here
        return () => {
            // Clean up code if needed (e.g., remove event listeners)
        };
    }, []); // Empty dependency array ensures the effect runs only once

    // CSS styles for the map container
    const mapContainerStyle = {
        width: 'calc(100% - 40px)', // Adjust width to fit within parent container and account for border
        height: 'calc(100% - 40px)', // Adjust height to fit within parent container and account for border
        border: '1px solid #000', // Add a border for visibility
        margin: '20px', // Add margin to ensure spacing between map container and parent container
    };

    return <div id="map" style={mapContainerStyle}></div>; // Apply the mapContainerStyle to the div
}

export default MapComponent;
