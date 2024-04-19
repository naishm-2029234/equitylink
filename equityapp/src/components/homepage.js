import React from 'react';
import WelcomePageBanner from '../img/WelcomePageBanner.jpg';
import HomepageStep1 from "../img/HomepageStep1.jpg";
import HomepageStep2 from "../img/HomepageStep2.jpg";
import HomepageStep3 from "../img/HomepageStep3.jpg";
import HomepageStep4 from "../img/HomepageStep4.jpg";
function Homepage() {
  return (
    <div>
       <div className="banner_homepage">
          <img src={WelcomePageBanner} alt="Banner Image" />
          <div className="banner_homepage-text">
            <h1>CULTIVATE DATA INCLUSION</h1>
            <p>Our mission is to bridge the digital literacy gap by providing valuable insights, resources, and connections 
            for organizations and community members alike. </p>
          </div>
          
        </div>
        <div className="purpose">
          <p>Welcome to our website, dedicated to cultivating digital inclusion within the Hispanic communities of Tri-Cities, 
            Washington.
            Explore our site to learn how your organization can make a meaningful impact and empower underrepresented groups through
            digital education and access.</p>
        </div>
        <div className="step">
        <div className="step-image">
          <img src={HomepageStep1} alt="Step 1" />
        </div>
        <div className="step-content">
          <h3>Identifying Program Goals</h3>
          <p>Connect with your community to find which resources may be most beneficial to them. Are they focused on improving their 
            computer skills? Do they lack access to internet? All of these can serve as a guide to 
            establishing what the focus of the program will be and how it will meet your community’s needs. </p>
          <a href="step1.html" className="learn-more">Learn More</a>
        </div>
      </div>
      <div className="step">
        <div className="step-content">
          <h3>Finding Resources </h3>
          <p>To find resources such as the nearest non-profit organizations near you, libraries, and skill centers, 
            you can go to the funding resources tab and filter for which infrastructures you would like to find. </p>
          <a href="step2.html" className="learn-more">Learn More</a>
        </div>
        <div className="step-image">
          <img src={HomepageStep2} alt="Step 2" />
        </div>
      </div>
      <div className="step">
        <div className="step-image">
          <img src={HomepageStep3} alt="Step 3" />
        </div>
        <div className="step-content">
          <h3>Program Budgeting</h3>
          <p>To get an estimate of how much it may cost to implement a program in your community, you can navigate to the budgeting calculator. </p>
          <a href="step3.html" className="learn-more">Learn More</a>
        </div>
      </div>
      <div className="step">
        <div className="step-content">
          <h3>Implementing Programs</h3>
          <p>Explore workshops and relevant articles on our website. Access insights, connect with organizations, and 
            learn effective community service strategies through our platform.</p>
          <a href="step4.html" className="learn-more">Learn More</a>
        </div>
        <div className="step-image">
          <img src={HomepageStep4} alt="Step 4" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;