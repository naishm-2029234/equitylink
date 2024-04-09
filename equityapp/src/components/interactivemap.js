import React from 'react';
import '../AboutPage.css';

import banner from '../img/resourcebanner.jpg';

function Interactivemap() {
    return (
      <div className="App">
        <div className="banner">
          <img src={banner} alt="Banner Image" />
          <div className="banner-text">
            <h1>INTERACTIVE MAP</h1>
          </div>
        </div>
        <div className="purpose">
          <p>Discover local infrastructure and organizations that can support your community programs. Explore the interactive map below to identify nearby libraries, community centers, and other infrastructures in Ti-Cities, Washington. These resources can play a crucial role in building and enhancing your community initiatives.</p>
        </div>
        <div className="about-us">
          <h2>How To Use</h2>
          <p>
          Use the interactive map to explore community resources in your area.

Click on map markers to view details about specific locations, including contact information, services offered, and potential collaboration opportunities.

Instructions:
Click on a marker to view details about a specific location.
Use the zoom and pan features to explore different areas.
Filter the map by selecting specific categories (libraries, community centers, non-profits) using the options provided.
          </p>
    
        </div>
      </div>
    );
  }
  
  export default Interactivemap;