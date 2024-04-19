import React, { useState } from 'react';
import '../practice.css';
import banner from '../img/ToolkitBanner.jpg';
import cardImage1 from '../img/ToolkitImage1.jpg';
import cardImage2 from '../img/ToolkitImage2.jpg';
import cardImage3 from '../img/ToolkitImage3.jpg';
import cardImage4 from '../img/ToolkitImage4.jpg'; // Corrected image import

function PractitionerToolkit() {
  const [showImages, setShowImages] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  const cardImages = [
    { src: cardImage1, description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success' },
    { src: cardImage2, description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success' },
    { src: cardImage3, description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success' },
    { src: cardImage4, description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success' }
  ];

  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Banner Image" />
        <div className="banner-text">
          <h1>PRACTITIONER TOOLKIT</h1>
        </div>
      </div>


      <div>


      </div>


      <div className="about-us">
        <h2>Programs</h2>
        <p>
          The following online programs are comprehensive resources designed to empower cultural brokers and digital equity practitioners to expand digital literacy in their communities.
          Below are the available resources such as articles and programs for the practitioners to look at. Through our platform, practitioners can access insights for program success, connect with organizations for support, and understand how to bring services to their communities effectively.
        </p>
      </div>

      <div className="step">
        {cardImages.map((image, index) => (
          <div className="step-image" key={index}>
            <img src={image.src} alt={`Image ${index + 1}`} />
            <div className="desc">{image.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PractitionerToolkit;
