import React from 'react';
import WelcomePageBanner from '../img/WelcomePageBanner.jpg';

function funding() {
  return (
    <div>
       <div className="banner">
          <img src={WelcomePageBanner} alt="Banner Image" />
          <div className="banner-text">
            <h1>CULTIVATE DATA INCLUSION</h1>
          </div>
        </div>
        <div className="purpose">
          <p>Welcome to our website, dedicated to cultivating digital inclusion within the Hispanic communities of Tri-Cities, 
            Washington. Our mission is to bridge the digital literacy gap by providing valuable insights, resources, and connections 
            for organizations and community members alike. Here, organizations can discover how to effectively close the digital divide 
            through successful program implementation. Our homepage serves as a gateway to essential steps in the program implementation 
            process, guiding users through identifying program goals, finding resources, securing funding, and executing initiatives. 
            Explore our site to learn how your organization can make a meaningful impact and empower underrepresented groups through
            digital education and access.</p>
        </div>
    </div>
  );
}

export default funding;