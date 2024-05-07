import React from 'react';
import { NavLink } from "react-router-dom";
import WelcomePageBanner from '../img/WelcomePageBanner.jpg';
import HomepageStep1 from "../img/HomepageStep1.jpg";
import HomepageStep2 from "../img/HomepageStep2.jpg";
import HomepageStep3 from "../img/HomepageStep3.jpg";
import HomepageStep4 from "../img/HomepageStep4.jpg";
import FooterBanner from './FooterBanner';

function Homepage() {
  return (
    <div>
       <div className="banner_homepage">
          <img src={WelcomePageBanner} alt="Banner Image" />
          <div className="banner_homepage-text">
            <h1>Steps for Implementing Digital Literacy Programs</h1>
          </div>
        </div>
        <div className="purpose">
          <p> Interested in creating a digital literacy program for a community? 
            The following is a guide on steps for implementing digital literacy programs. 
            Whether you would like to create a computer class or increase internet access, 
            the information below can help get you started.
             </p>
        </div>
        <div className="step">
        <div className="step-image">
          <img src={HomepageStep1} alt="Step 1" />
        </div>
        <div className="step-content">
          <h3>1. Find Community Goals and Needs</h3>
          <p>Find your community's goals and needs. Discuss with the community members which programs may be most useful for them. 
            Discover valuable insights on our Insights page to delve into demographic data and other relevant information to make 
            informed decisions and maximize impact.
             </p>
            <NavLink to="/insights" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
        </div>
      </div>
      <div className="step">
        <div className="step-content">
          <h3>2. Find Local Infrastructures </h3>
          <p>To find resources such as the nearest non-profit organizations near you, libraries, educational institutions and skill centers, 
            you can go to the Interactive Map tab and filter for which infrastructures you would like to find. </p>
            <NavLink to="/interactivemap" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
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
          <h3>3. Budget Your Program</h3>
          <p>To access helpful budgeting tips for planning your program, simply navigate to the budgeting page. 
            There, you'll find valuable insights to assist you in effectively managing your community initiatives.</p>
            <NavLink to="/funding" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
        </div>
      </div>
      <div className="step">
        <div className="step-content">
          <h3>4. Enhance Your Leadership Skills</h3>
          <p>Explore workshops and relevant articles on expanding your leadership skills on our Practitioner Toolkit page. Access insights, connect with organizations, and 
            learn effective community service strategies.</p>
            <NavLink to="/practitioner" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
        </div>
        <div className="step-image">
          <img src={HomepageStep4} alt="Step 4" />
        </div>
      </div>
      <FooterBanner />
    </div>
  );
}

export default Homepage;