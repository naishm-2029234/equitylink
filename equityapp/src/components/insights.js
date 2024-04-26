import React from 'react';
import '../AboutPage.css';
import banner from '../img/resourcebanner.jpg';
import chart from '../img/chart.png';

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
        <iframe id="cr-embed-05000US53005-demographics-race" className="census-reporter-embed" src="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=05000US53005&chartDataID=demographics-race&dataYear=2022&releaseID=ACS_2022_1-year&chartType=column&chartHeight=200&chartQualifier=Hispanic+includes+respondents+of+any+race.+Other+categories+are+non-Hispanic.&chartTitle=&initialSort=&statType=scaled-percentage" frameborder="0" width="100%" height="300" style={{ margin: '1em', maxWidth: '720px' }}></iframe>
        <iframe id="cr-embed-05000US53021-demographics-race" className="census-reporter-embed" src="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=05000US53021&chartDataID=demographics-race&dataYear=2022&releaseID=ACS_2022_1-year&chartType=column&chartHeight=200&chartQualifier=Hispanic+includes+respondents+of+any+race.+Other+categories+are+non-Hispanic.&chartTitle=&initialSort=&statType=scaled-percentage" frameborder="0" width="100%" height="300" style={{ margin: '1em', maxWidth: '720px' }}></iframe>
        <div className="chart-container"></div>
        <img src={chart} alt="chart"/>
      </div>
    </div>
  );
}

export default Insights;


