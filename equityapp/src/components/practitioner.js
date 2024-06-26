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
      type: 'Workshop',
      date: 'July 24, 2024',
      title: 'FREE TECH RESOURCES FOR ALL LEVELS',
      description: 'Explore this website for tools and resources to build your confidence and skills in technology.',
      link: 'https://www.digitallearn.org/'
  },
  {
      imageSrc: cardImage2,
      type: 'Video',
      date: 'May 10, 2024',
      title: 'LEARN BASIC COMPUTER SKILLS',
      description: 'Embark on your journey to knowledge and skill enhancement through online training videos.',
      link: 'https://www.youtube.com/watch?v=y2kg3MOk1sY'
  },
  {
      imageSrc: cardImage3,
      type: 'Website',
      date: 'April 10, 2024',
      title: 'VOLUNTEERING IN A LITERACY PROGRAM',
      description: 'Explore opportunities to make a difference through volunteering in literacy programs and empower individuals.',
      link: 'https://www.networkforgood.org/topics/education/digitaldivide/'
  },
  {
      imageSrc: cardImage4,
      type: 'Workshop',
      date: 'March 10, 2024',
      title: 'FREE COMPUTER INTERACTIVE COURSES',
      description: 'Join free interactive computer courses designed to enhance your digital skills and expand your opportunities.',
      link: 'https://edu.gcfglobal.org/en/topics/computers/'
  },
  {
      imageSrc: cardImage5,
      type: 'Article',
      date: 'Feb 28, 2024',
      title: 'BEST PRACTICES TIPS AND TRICKS',
      description: 'Learn some tips and tricks for digital empowerment and community development.',
      link: 'https://medium.com/fidutam/how-fidutam-is-increasing-digital-literacy-among-the-underserved-communities-ad11165da21a'
  },
  {
      imageSrc: cardImage6,
      type: 'Article',
      date: 'Feb 10, 2024',
      title: 'STRATEGIES TO SUPPORT DIGITAL LITERACY',
      description: 'Discover effective strategies to strengthen digital literacy and prepare for success in today\'s tech-driven workforce.',
      link: 'https://www.learning.com/blog/proven-strategies-support-digital-literacy/'
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