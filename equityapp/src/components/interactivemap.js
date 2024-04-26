import React from 'react';
import '../interactivemap.css';

import banner from '../img/resourcebanner.jpg';
import MapComponent from './MapComponent'; // Import the MapComponent

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
        <p>Discover local infrastructure and organizations that can support your community programs. Explore the interactive map below to identify nearby libraries, community centers, and other infrastructures in Tri-Cities, Washington. These resources can play a crucial role in building and enhancing your community initiatives.</p>
      </div>
      <div className="about-us">
        <h2>How To Use</h2>
        <p>
          Use the interactive map to explore community resources in your area.

          Click on map markers to view details about specific locations, including contact information, services offered, and potential collaboration opportunities.

          Instructions:
          Click on a marker to view details about a specific location.
          Use the zoom and pan features to explore different areas.
          Filter the map by selecting specific categories (libraries, community services office ect.) using the options provided.
        </p>
        <h2>Benefits of Using the Map:</h2>

        <ul>
          <h3> Program Builders</h3>
          <li><strong>Efficient Resource Identification:</strong> Program builders can easily identify
          relevant resources using the interactive map. This saves time and effort in researching and locating essential infrastructure for program development.</li>
          <li><strong>Strategic Planning:</strong> Access detailed information about resources to ensure inclusivity and accessibility for all community members.</li>
          <li><strong>Community Collaboration:</strong> identify local organizations and agencies to foster collaboration and partnerships in program development.</li>
          <li><strong>User-Friendly Interface:</strong> Access to information such as address details and tags enables to ensure inclusivity in
          programming. Select resources located in accessible areas and offer services tailored to the diverse needs of the community.</li>
        </ul>
          <ul>
          <h3>Community Advocates</h3>
            <li><strong>Resource Accessibility:</strong> Community advocates can use the map to guide community members to essential resources and support services. They can provide personalized assistance by referring individuals to specific organizations or facilities based on their needs.</li>
            <li><strong>Awareness Building:</strong> Use it as a tool for raising awareness about currently available resources and services. An easy way to conduct outreach and education campaigns, ensuring that residents are aware of the support available to them.</li>
          </ul>
        <h2>Get Started:</h2>

        <p>Ready to explore? Click on the interactive map below to begin your journey. Whether you're a seasoned program builder or just getting started, our map is your gateway to creating positive change in the Tri-Cities community.</p>

          <div className="map-container-inpage" >
                <MapComponent />
            </div>        
            </div>
      </div>
    );
}

export default Interactivemap;
