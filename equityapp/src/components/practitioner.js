import React from 'react';
import banner from '../img/ToolkitBanner.jpg';
import cardImage from '../img/ToolkitImage1.jpg';
import cardImage1 from '../img/ToolkitImage2.jpg';
import cardImage2 from '../img/ToolkitImage3.jpg';
import cardImage3 from '../img/ToolkitImage4.jpg'; // Corrected image import

// Assuming Card component is defined elsewhere

function PractitionerToolkit() {
  const cardImageUrls = [
    cardImage,
    cardImage1,
    cardImage2,
    cardImage3
  ];

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

      <div className="gallery">
        {cardImageUrls.map((url, index) => (
          <div className="gallery-item" key={index}>
            <img src={url} alt={`Card ${index + 1}`} width="600" height="400" />
            <div className="desc">Add a description of the image here</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PractitionerToolkit;
