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
        <p>Discover local infrastructure and organizations that can support your community programs. Explore the interactive map below to identify nearby libraries, educational institutions, and other infrastructures in Tri-Cities, Washington. These resources can play a crucial role in building and enhancing your community initiatives.</p>
      </div>
      <div className="about-us">
      <h2 >Benefits of Using the Map:</h2>
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
    
        <h2>How To Use</h2>
        <ul>
        <p className="about-us-diff"><strong>Instructions:</strong></p>
        <ol>
  <li> Click on a marker to view details about a specific location.</li>
  <li> Use the zoom and pan features to explore different areas.</li>
  <li> Filter the map by selecting specific categories using the options provided: 
    <ul className='maptextpadding'>
      <li><span class="location-description"><strong>Libraries:</strong> Libraries serve as hubs of knowledge and learning, offering resources such as books, internet access, and educational programs. They provide invaluable support for literacy initiatives, educational workshops, and community gatherings, fostering a culture of lifelong learning and empowerment.</span></li>
      <li><span class="location-description"><strong>Community Services Offices:</strong> Public community social services encompass a wide range of support systems aimed at addressing social challenges and enhancing well-being. These services include healthcare facilities, counseling centers, shelters, and food banks. Collaborating with these organizations enables nonprofits to address immediate needs, provide vital assistance to vulnerable populations, and advocate for systemic change.</span></li>
      <li><span class="location-description"><strong>Educational Institutions:</strong> Educational institutions, including schools and universities, play a pivotal role in community development. They offer spaces for skill-building workshops, mentorship programs, and collaborative projects. By partnering with educational institutions, nonprofits can access expertise, facilities, and a diverse pool of volunteers, enriching their programs and impact.</span></li>
      <li><span class="location-description"><strong>Vocational Services:</strong> Vocational services offer training, employment opportunities, and career development support, empowering individuals to achieve economic stability and independence. Nonprofits can collaborate with vocational training centers, job placement agencies, and skill-building programs to facilitate workforce development, entrepreneurship initiatives, and economic empowerment projects within the community.</span></li>
    </ul>
  </li>
</ol>
  </ul>

          <div className="map-container-inpage" >
                <MapComponent />
            </div>        
            </div>
      </div>
    );
}

export default Interactivemap;
