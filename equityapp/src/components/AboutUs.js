import React from 'react';
import '../AboutPage.css';
import banner from '../img/AboutUsBanner.jpg';
import aboutUs1 from '../img/AboutUs1.jpg';
import aboutUs2 from '../img/AboutUs2.jpg';
import partnerLogo from '../img/partnerlogo.jpg';


function AboutUs() {
  let currentLanguage = 'en';

  // function googleTranslateElementInit() {
  //   new google.translate.TranslateElement(
  //     { pageLanguage: 'en' },
  //     'google_translate_element'
  //   );
  // }

  return (
    
    <div className="App">
      <header>
        <div id="google_translate_element"></div> 
        
      </header>

      <div className="banner">
        <img src={banner} alt="Banner Image" />
        <div className="banner-text">
          <h1>OUR MISSION</h1>
        </div>
      </div>
      <div className="purpose">
        <p>Welcome to our website, dedicated to cultivating digital inclusion within the Hispanic communities of Tri-Cities, Washington. Explore guides, an interactive map, budgeting tips, and workshops to empower your organization and support underrepresented groups in accessing digital education and resources.</p>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>Our team, comprised of students from the University of Washington, under the sponsorship of Yekaterina Yefimova, is dedicated to empowering Hispanic communities in the Tri-Cities area of Washington. These communities often lack access to essential digital resources, including high-speed Internet and computer skills. With our own experiences as underrepresented backgrounds in mind, we meticulously designed this website to cater to the needs of our users.</p>

        <p>Within our site, users will discover an array of tools tailored for both digital equity practitioners and cultural brokers. These include guides for implementing digital literacy programs, an interactive map highlighting crucial infrastructures like libraries and nearby nonprofit organization offices, budgeting tips, and workshops aimed at enhancing practitioner skills. While certain features, such as our interactive map, are specific to the Tri-Cities area, we strive to provide valuable information for all users navigating the realm of digital literacy. It's important to note that our project is ongoing, with continual updates and improvements underway.</p>
          
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
