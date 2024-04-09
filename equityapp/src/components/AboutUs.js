import React from 'react';
import '../AboutPage.css';
// import equityLinkLogo from '../img/equitylink-logo.png';
import banner from '../img/AboutUsBanner.jpg';
import aboutUs1 from '../img/AboutUs1.jpg';
import aboutUs2 from '../img/AboutUs2.jpg';
import partnerLogo from '../img/partnerlogo.jpg';

function AboutUs() {
    return (
      <div className="App">
          {/* <nav>
            <div className="logo">
              <a href="index.html"><img src={equityLinkLogo} alt="EquityLink Logo" /></a>
            </div>
            <div className="navbar">
              <ul>
                <li><a href="finding-resources.html">Finding Resources</a></li>
                <li><a href="budgeting.html">Budgeting</a></li>
                <li><a href="practitioner-toolkit.html">Practitioner Toolkit</a></li>
                <li><a href="about-us.html">About Us</a></li>
              </ul>
            </div>
            <div className="language">
              <select id="language-select">
                <option value="english">English</option>
                <option value="spanish">Espanol</option>
              </select>
              <i className="fas fa-globe"></i>
            </div>
          </nav> */}
        <div className="banner">
          <img src={banner} alt="Banner Image" />
          <div className="banner-text">
            <h1>OUR MISSION</h1>
          </div>
        </div>
        <div className="purpose">
          <p>We aim to provide background knowledge and steps for Hispanic communities in the tri-cities area to implement digital literacy programs.</p>
        </div>
        <div className="about-us">
          <h2>About Us</h2>
          <p>Our team consists of students at the University of Washington. We aim to empower Hispanic communities in the tri-cities 
              area of Washington that lack access to digital resources such as high-speed Internet, and computer skills. We designed 
              this site with our underrepresented background users in mind. On our site you will find tools for both digital equity 
              practitioners and cultural brokers such as steps for implementing digital literacy programs, an interactive map to find 
              infrastructures such as libraries and nearby non-profit organization offices, a funding calculator to estimate program 
              cost, and workshops to improve practitioner skills. While some of our features such as our interactive map may be focused 
              on the tri-cities area, we hope all our users can find helpful information as they navigate bringing digital literacy.</p>
          <div className="team-images">
            <img src={aboutUs1} alt="Team 1" width="50%" style={{ marginRight: '10px' }} />
            <img src={aboutUs2} alt="Team 2" width="50%" />
          </div>
        </div>
        <div className="our-partners">
          <h2>Our Partners</h2>
          <div className="team-images">
            <img src={partnerLogo} alt="Partner 1" width="50%" style={{ marginRight: '10px' }} />
            <img src={partnerLogo} alt="Partner 2" width="50%" />
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs;