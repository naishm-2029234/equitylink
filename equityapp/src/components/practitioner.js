import React from 'react';
import banner from '../img/womanizer-toys-8oB43mw658c-unsplash.jpg';

function PractitionerToolkit() {
  return (
    <div> 
      <div className="banner">
        <img src={banner} alt="Banner Image" />
        <div className="banner-text">
          <h1>Practitioner Toolkit</h1>
        </div>
      </div>
      
      <div className="about-us">
        <h2>Programs</h2>
        <p>
          The following online programs are comprehensive resources designed to empower cultural brokers and digital equity practitioners to expand digital literacy in their communities. 
          Below are the available resources such as articles and programs for the practitioners to look at. Through our platform, practitioners can access insights for program success, connect with organizations for support, and understand how to bring services to their communities effectively. 
        </p>
      </div>
    </div>
  );
}

export default PractitionerToolkit;
