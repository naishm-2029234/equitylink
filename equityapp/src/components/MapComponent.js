import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../map.css';
import libraryicon from '../img/icons/library.png';
import markersData from './markerdatabase.csv'; // Import CSV data
import Papa from 'papaparse';

const Map = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]); // State to hold marker data

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.remove();
    }
    // Initialize map
    mapRef.current = L.map('map').setView([46.2148, -119.1367], 10); // Centered on Tri-Cities, Washington

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Parse CSV data and set markers state
    parseCSVData();
  }, []);

  const parseCSVData = async () => {
    try {
      const response = await fetch(markersData);
      const csvData = await response.text();
    
      Papa.parse(csvData, {
        header: true,
        complete: function(results) {
          const markers = results.data.map(row => {
            const address = row['Address'];
            const latitude = parseFloat(row['Latitude']);
            const longitude = parseFloat(row['Longitude']);
            const category = row['Category'];
            console.log('Marker Data:', address, latitude, longitude, category); // Log marker data
  
            // Check if latitude and longitude are valid numbers
            if (!isNaN(latitude) && !isNaN(longitude)) {
              console.log('Parsed LatLng:', latitude, longitude); // Log parsed latitude and longitude
              return {
                address,
                coordinates: [latitude, longitude],
                category
              };
            } else {
              console.error('Invalid latitude or longitude:', latitude, longitude);
              return null;
            }
          }).filter(marker => marker !== null); // Remove markers with invalid coordinates
  
          setMarkers(markers);
  
          // Create markers on the map
          markers.forEach(marker => {
            L.marker(marker.coordinates, { icon: L.icon({ iconUrl: libraryicon, iconSize: [32, 32] }) })
              .bindPopup(`
                <b>${marker.address}</b><br>
                Category: ${marker.category}<br>
              `)
              .addTo(mapRef.current);
          });
        },
        error: function(error) {
          console.error('Error parsing CSV data:', error);
        }
      });
    } catch (error) {
      console.error('Error fetching CSV data:', error);
    }
  };

  return (
    <div className="map-container">
      <div className="justmap">
        <div id="map" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default Map;
