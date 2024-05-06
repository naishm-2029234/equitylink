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
            <h1>BridgeCommunities: Empowering Hispanics in Tri-Cities</h1>
            <p>Our mission is to bridge the digital literacy gap by providing valuable insights, resources, and connections 
            for organizations and community members alike. </p>
          </div>
          
        </div>
        <div className="purpose">
          <p>Welcome to our website, dedicated to cultivating digital inclusion within the Hispanic communities of Tri-Cities, 
            Washington.
            Explore guides, an interactive map, budgeting tips, and workshops to empower your organization and support underrepresented groups in accessing digital education and resources.</p>
        </div>
        <div className="step">
        <div className="step-image">
          <img src={HomepageStep1} alt="Step 1" />
        </div>
        <div className="step-content">
          <h3>Enhance Your Community Initiatives</h3>
          <p>Discover valuable insights on our Insights page to inform and enrich your community program initiatives. 
            Delve into demographic data and other relevant information to make informed decisions and maximize impact.</p>
            <NavLink to="/insights" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
        </div>
      </div>
      <div className="step">
        <div className="step-content">
          <h3>Finding Resources </h3>
          <p>To find resources such as the nearest non-profit organizations near you, libraries, and skill centers, 
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
          <h3>Program Budgeting</h3>
          <p>To access helpful budgeting tips for planning your program, simply navigate to the budgeting page. 
            There, you'll find valuable insights to assist you in effectively managing your community initiatives.</p>
            <NavLink to="/funding" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
        </div>
      </div>
      <div className="step">
        <div className="step-content">
          <h3>Implementing Programs</h3>
          <p>Explore workshops and relevant articles on our website. Access insights, connect with organizations, and 
            learn effective community service strategies through our platform.</p>
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