import React, { useEffect, useRef, useState } from 'react'; // Import useRef
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../map.css';
import libraryicon from '../img/icons/maki_library.jpg';

const Map = () => {
  const mapRef = useRef(null);
  const [showSchools, setShowSchools] = useState(true); // State to toggle schools visibility
  const [showLibraries, setShowLibraries] = useState(true); // State to toggle libraries visibility
  const tricitiesData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              [
                -119.27170446159381,
                46.34545936605409
              ],
              [
                -119.34054924303612,
                46.346403978809064
              ],
              [
                -119.40232926933558,
                46.36356337271613
              ],
              [
                -119.41576225620132,
                46.32530533360497
              ],
              [
                -119.43201368753284,
                46.305667305615145
              ],
              [
                -119.41501965255577,
                46.299797966634145
              ],
              [
                -119.39163406405675,
                46.3096200434467
              ],
              [
                -119.35949796413927,
                46.24531702770696
              ],
              [
                -119.29920202668424,
                46.220793818934936
              ],
              [
                -119.29280734242312,
                46.17173645134321
              ],
              [
                -119.2995740144506,
                46.12074075520937
              ],
              [
                -119.11893240965938,
                46.121118796811004
              ],
              [
                -119.07652977142438,
                46.09501789865436
              ],
              [
                -119.02681914114095,
                46.093208533903976
              ],
              [
                -119.01638834486772,
                46.115986734359495
              ],
              [
                -118.99656613605408,
                46.12246738953701
              ],
              [
                -118.96025204293377,
                46.16450774920409
              ],
              [
                -119.06196860308421,
                46.211451970923235
              ],
              [
                -119.04543551397335,
                46.2305446790385
              ],
              [
                -119.0990456895213,
                46.27033694618157
              ],
              [
                -119.16447476145855,
                46.2768711081784
              ],
              [
                -119.25593149927832,
                46.28070270724143
              ],
              [
                -119.27170446159381,
                46.34545936605409
              ]
            ]
          ],
          "type": "Polygon"
        },
        "id": 0
      }
    ]
  }

  useEffect(() => {
    if (mapRef.current) {
        mapRef.current.remove();
      }
    // Initialize map
    mapRef.current = L.map('map').setView([46.2148, -119.1367], 10); // Centered on Tri-Cities, Washington

  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    L.geoJSON(tricitiesData, {
      style: {
        color: 'blue',
        weight: 2,
        opacity: 1
      }
    }).addTo(mapRef.current);

// Define coordinates for schools
const schools = [
    { name: 'School A', coordinates: [46.22, -119.21] },
    { name: 'School B', coordinates: [46.25, -119.15] },

  ];

  // Define coordinates for libraries
  const libraries = [
    { name: 'Library X', coordinates: [46.24, -119.17], description: 'This is a description of Library X.' },
    { name: 'Library Y', coordinates: [46.27, -119.14], description: 'This is a description of Library Y.' },

  ];

      // Create custom icon
      const libraryIcon = L.icon({
        iconUrl: libraryicon,
        iconSize: [32, 32],
      });

  //  markers for schools
  if (showSchools) {
  schools.forEach(school => {
    L.marker(school.coordinates)
      .bindPopup(`<b>${school.name}</b><br>School`)
      .addTo(mapRef.current);
  });
}

 //  markers for libraries
 if (showLibraries) {
 libraries.forEach(library => {
    L.marker(library.coordinates, { icon: libraryIcon })
    .bindPopup(`
    <b>${library.name}</b><br>
    ${library.description}<br>
    <a href="#">More Info</a>
  `)
  .addTo(mapRef.current);
});}
 }, [showSchools, showLibraries]);

  // Function to handle checkbox change for schools
  const handleSchoolsChange = () => {
    setShowSchools(!showSchools);
  };

  // Function to handle checkbox change for libraries
  const handleLibrariesChange = () => {
    setShowLibraries(!showLibraries);
  };


  return (
    <div  className="map-container">
    
      <div className="toggle-container">
      <label>
        Show Schools:
        <input type="checkbox" checked={showSchools} onChange={handleSchoolsChange} />
      </label>

      <label>
        Show Libraries:
        <input type="checkbox" checked={showLibraries} onChange={handleLibrariesChange} />
      </label>
      </div>
      < div className='justmap'>
      <div id="map"  style={{ width: '100%', height: '400px' }} />
    </div>
    </div>
  );
};


export default Map;
