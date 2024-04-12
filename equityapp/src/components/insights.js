import React from 'react';
import '../AboutPage.css';
import banner from '../img/resourcebanner.jpg';

function Insights() {
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Banner Image" />
        <div className="banner-text">
          <h1>DATA INSIGHTS</h1>
        </div>
      </div>

      <div className="purpose">
        <p>Welcome to the Insights page, your go-to destination for data-driven insights that can inform and enhance your program-building efforts in undersupported communities. This section will answer key questions about demographics and other relevant information, empowering you with the knowledge needed to make informed decisions and maximize the impact of your initiatives. Source 2021 US Census </p>
      </div>

      <div className="about-us">
        <h2>Demographic Insights</h2>
      </div>
    </div>
  );
}

export default Insights;


