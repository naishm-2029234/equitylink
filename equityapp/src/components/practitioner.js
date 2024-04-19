/*import React, { useState } from 'react';*/
import '../practice.css';
import banner from '../img/ToolkitBanner.jpg';
import cardImage1 from '../img/ToolkitImage1.jpg';
import cardImage2 from '../img/ToolkitImage2.jpg';
import cardImage3 from '../img/ToolkitImage3.jpg';
import cardImage4 from '../img/ToolkitImage4.jpg'; 
import cardImage5 from '../img/Toolkitimage5.jpg';
import cardImage6 from '../img/ToolkitImage6.jpg';
// Corrected image import

import React from 'react';
import Card from './Card';


const PractitionerToolkit = () => {
  const cardsData = [
    {
      imageSrc: cardImage1,
      type: 'Recording',
      date: 'July 24, 2024',
      title: 'WORKSHOP SERIES FOR DIGITAL SUCCESS',
      description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success.',
      link: '/program'
  },
  {
      imageSrc: cardImage2,
      type: 'Recording',
      date: 'May 10, 2024',
      title: 'DISTANCE EDUCATION ONLINE TRAINING',
      description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success.',
      link: '/workshop'
  },
  // Continue for the other cards
  {
      imageSrc: cardImage3,
      type: 'Article',
      date: 'April 10, 2024',
      title: 'VOLUNTEERING IN A LITERACY PROGRAM',
      description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success.',
      link: '/workshop'
  },
  {
      imageSrc: cardImage4,
      type: 'Article',
      date: 'March 10, 2024',
      title: 'BEST PRACTICES TIPS AND TRICKS',
      description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success.',
      link: '/workshop'
  },
  {
      imageSrc: cardImage5,
      type: 'Recording',
      date: 'Feb 28, 2024',
      title: 'DISTANCE EDUCATION ONLINE TRAINING',
      description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success.',
      link: '/workshop'
  },
  {
      imageSrc: cardImage6,
      type: 'Workshop',
      date: 'Feb 10, 2024',
      title: 'VOLUNTEERING IN A LITERACY PROGRAM',
      description: 'Join us for a series of free hybrid and virtual events to prepare for your digital success.',
      link: '/workshop'
  },
  ];

  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Banner Image" />
        <div className="banner-text">
          <h1>PRACTITIONER TOOLKIT</h1>
        </div>
      </div>

      <div className="purpose">
        <p>
          The following online programs are comprehensive resources designed to empower cultural brokers and digital equity practitioners to expand digital literacy in their communities.
          Below are the available resources such as articles and programs for the practitioners to look at.
        </p>
      </div>

      <div className="card-container">
          {cardsData.map((card, index) => (
              <Card
                  key={index}
                  imageSrc={card.imageSrc}
                  type={card.type}
                  date={card.date}
                  title={card.title}
                  description={card.description}
                  link={card.link}
              />
          ))}
      </div>
    </div>
  );
};
   
      
export default PractitionerToolkit;

/*
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
*/