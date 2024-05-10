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
        <p>Welcome to the Insights page. Here you will find data insights to inform you about race, languages, education and broadband information to enhance your program-building efforts in Benton and Franklin County communities. This section will answer key questions about demographics and other relevant information, giving you the knowledge needed to make informed decisions and maximize the impact of your initiatives. Source 2022 ACS 1-Year Estimates </p>
      </div>

      <div className="about-us">
        <h2>Demographic Insights</h2>
        <ul>
          <h3>Race</h3>
          <li> Knowing the race make up of the county you want to work with can help determine the percentage of underrepresented communities in the area</li>
          <iframe id="cr-embed-05000US53005-demographics-race" className="census-reporter-embed" src="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=05000US53005&chartDataID=demographics-race&dataYear=2022&releaseID=ACS_2022_1-year&chartType=column&chartHeight=200&chartQualifier=Hispanic+includes+respondents+of+any+race.+Other+categories+are+non-Hispanic.&chartTitle=&initialSort=&statType=scaled-percentage" frameborder="0" width="100%" height="300" style={{ margin: '1em', maxWidth: '720px' }}></iframe>
          <iframe id="cr-embed-05000US53021-demographics-race" className="census-reporter-embed" src="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=05000US53021&chartDataID=demographics-race&dataYear=2022&releaseID=ACS_2022_1-year&chartType=column&chartHeight=200&chartQualifier=Hispanic+includes+respondents+of+any+race.+Other+categories+are+non-Hispanic.&chartTitle=&initialSort=&statType=scaled-percentage" frameborder="0" width="100%" height="300" style={{ margin: '1em', maxWidth: '720px' }}></iframe>
        </ul>
        <ul>
          <h3>Languages</h3>
          <iframe src="https://data.census.gov/vizwidget?g=050XX00US53005&infoSection=Language Spoken at Home" width="100%" height="600" style={{ border: '0', margin: '0' }}></iframe>
          <iframe src="https://data.census.gov/vizwidget?g=050XX00US53021&infoSection=Language Spoken at Home" width="100%" height="600" style={{ border: '0', margin: '0' }}></iframe>
        </ul>
        <ul>
        <h3>Education</h3>
        <iframe id="cr-embed-05000US53005-social-educational_attainment_distribution" className="census-reporter-embed" src="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=05000US53005&chartDataID=social-educational_attainment_distribution&dataYear=2022&releaseID=ACS_2022_1-year&chartType=histogram&chartHeight=200&chartQualifier=Universe%3A+Population+25+years+and+over&chartTitle=Population+by+highest+level+of+education&initialSort=&statType=scaled-percentage" frameborder="0" width="100%" height="300" style={{ margin: '1em', maxWidth: '720px' }}></iframe>
        <iframe id="cr-embed-05000US53021-social-educational_attainment_distribution" className="census-reporter-embed" src="https://s3.amazonaws.com/embed.censusreporter.org/1.0/iframe.html?geoID=05000US53021&chartDataID=social-educational_attainment_distribution&dataYear=2022&releaseID=ACS_2022_1-year&chartType=histogram&chartHeight=200&chartQualifier=Universe%3A+Population+25+years+and+over&chartTitle=Population+by+highest+level+of+education&initialSort=&statType=scaled-percentage" frameborder="0" width="100%" height="300" style={{ margin: '1em', maxWidth: '720px' }}></iframe>
        </ul>
        <ul> 
        <h3>Broadband</h3>
        <img src={chart} alt="chart"/>
        </ul>
        </div>
        
        
        
      
      <div className="chart-container"></div>
      
    </div>
  );
}

export default Insights;



