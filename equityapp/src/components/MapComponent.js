import React, { useEffect, useRef, useState } from 'react'; // Import useRef
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../map.css';
import libraryicon from '../img/icons/library.png';
import schoolicon from '../img/icons/schoolicon.png';
import officeicon from '../img/icons/office.png';
import vocationalicon from '../img/icons/vocational.png';
import disabilityofficeicon from '../img/icons/disabilityoffice.png';
import dataset from './markerdatabase1.csv';

const Map = () => {
  const mapRef = useRef(null);
  const [showLibraries, setShowLibraries] = useState(true); // State to toggle libraries visibility
  const [showCommunityServicesOffices, setShowCommunityServicesOffices] = useState(true);
  const [showLibrarie, setShowLibrarie] = useState(true);
  const [showVocationalAndSocialServices, setShowVocationalAndSocialServices] = useState(true);
  const [showDisabilityServices, setShowDisabilityServices] = useState(true);
  const [showEducationalInstitutions, setShowEducationalInstitutions] = useState(true);
  
  const tricitiesData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              [
                -119.2604540629198,
                46.3512776438555
              ],
              [
                -119.27131201127916,
                46.35189320978053
              ],
              [
                -119.30657851297987,
                46.352629125074344
              ],
              [
                -119.3305684411232,
                46.351639632329416
              ],
              [
                -119.38418629386679,
                46.36503683861223
              ],
              [
                -119.3846724381591,
                46.357063905476025
              ],
              [
                -119.37588532245282,
                46.350370456698805
              ],
              [
                -119.35806377220388,
                46.338722066542644
              ],
              [
                -119.33700397177934,
                46.32994911994558
              ],
              [
                -119.32438101721915,
                46.322906607363095
              ],
              [
                -119.31871099079419,
                46.30559173810593
              ],
              [
                -119.32440177314722,
                46.29456720393702
              ],
              [
                -119.42540219167462,
                46.36498552830592
              ],
              [
                -119.45632399044301,
                46.348992361288175
              ],
              [
                -119.47837634024054,
                46.3269316915561
              ],
              [
                -119.3860535177374,
                46.28567503311464
              ],
              [
                -119.34512437067518,
                46.25242565055072
              ],
              [
                -119.30443576947178,
                46.228084184743835
              ],
              [
                -119.2686614060501,
                46.1973439809598
              ],
              [
                -119.20018666148118,
                46.16985061726402
              ],
              [
                -119.16411433251092,
                46.16258275574731
              ],
              [
                -119.11696947420059,
                46.15841194407258
              ],
              [
                -119.11076058073814,
                46.16367382953288
              ],
              [
                -119.09902748483111,
                46.16812069391089
              ],
              [
                -119.08960739539356,
                46.1694741472823
              ],
              [
                -119.07596470541581,
                46.17333702887643
              ],
              [
                -119.07217998101669,
                46.18757681219628
              ],
              [
                -119.09235686951725,
                46.20797618808473
              ],
              [
                -119.04165003772229,
                46.21358883026434
              ],
              [
                -119.00849545026736,
                46.230509802789754
              ],
              [
                -119.09134656717944,
                46.27247555177502
              ],
              [
                -119.1299432154748,
                46.27684934476966
              ],
              [
                -119.15366380161163,
                46.28534903452252
              ],
              [
                -119.18771985303633,
                46.2853197414622
              ],
              [
                -119.24703024003709,
                46.28561905035917
              ],
              [
                -119.24692105748639,
                46.25884322264449
              ],
              [
                -119.2714073070555,
                46.279319354366095
              ],
              [
                -119.2604540629198,
                46.3512776438555
              ]
            ]
          ],
          "type": "Polygon"
        }
      }
    ]
  }

  useEffect(() => {
    if (mapRef.current) {
        mapRef.current.remove();
      }
    // Initialize map
    mapRef.current = L.map('map').setView([46.2148, -119.1367], 10); // Centered on Tri-Cities, Washington

  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    L.geoJSON(tricitiesData, {
      style: {
        color: 'blue',
        weight: 2,
        opacity: 1
      }
    }).addTo(mapRef.current);

// Define coordinates for schools

  // Define coordinates for libraries
const librarie = [
 
  ];
  const communityServicesOffices = [
    { 
      name: 'Kennewick Community Services Office',
      description: 'a',
      link: 'https://www.dshs.wa.gov/location/dshs-cso-003',
      coordinates: [46.2227032, -119.2127365],
      address: '6909 Crosswind Blvd Kennewick, WA 99336',
      tags: 'food, cash, medical services',
      category: 'Community Services Offices'
    },
    { 
      name: 'Kennewick Child Support Office',
      description: 'fill',
      link: '', // Fill in the link
      coordinates: [46.2227032, -119.2127365],
      address: '6909 Crosswind Blvd Kennewick, WA 99336',
      tags: 'child support',
      category: 'Community Services Offices'
    },
    // Add more locations as needed
  ];
const libraries = [
    { 
      name: 'Richland Public Library',
      description: 'fill',
      link: '', // Fill in the link
      coordinates: [46.307858, -119.287602],
      address: '955 Northgate Dr Richland WA 99352',
      tags: 'computer access, charging stations',
      category: 'Libraries'
    },
    { 
      name: 'Mid-Columbia Libraries - West Pasco Branch',
      description: 'fill',
      link: '', // Fill in the link
      coordinates: [46.244072, -119.183267],
      address: '7525 Wrigley Dr, Pasco, WA 99301',
      tags: 'computer access, charging stations',
      category: 'Libraries'
    },
    // Add more locations as needed
  ];
  const vocationalAndSocialServices = [
    { 
      name: 'Home & Community Services - Kennewick Office',
      description: 'fill',
      link: '', // Fill in the link
      coordinates: [46.216649, -119.246213],
      address: '7113 W Okanogan Pl Kennewick, WA 99336',
      tags: 'long-term care services',
      category: 'Vocational and Social Services'
    },
    { 
      name: 'Goodwill Central Offices',
      description: 'a',
      link: 'https://goodwillotc.org/mission-services/',
      coordinates: [46.213978, -119.166141],
      address: '815 N. Kellogg St., Suite A Kennewick, WA 99336',
      tags: 'Vocational Rehabilitation, Social and Health',
      category: 'Vocational and Social Services'
    },
    // Add more locations as needed
  ];
const disabilityServices = [
    { 
      name: 'Kennewick DDA Field Office',
      description: 'fill',
      link: '', // Fill in the link
      coordinates: [46.224628, -119.133945],
      address: '500 N Morain St Suite 2210 Kennewick, WA 99336',
      tags: 'disability support',
      category: 'Disability Services'
    },
    { 
      name: 'Vocational Rehabilitation - Kennewick Office',
      description: 'fill',
      link: '', // Fill in the link
      coordinates: [46.224628, -119.133945],
      address: '500 N Morain St Suite 2210 Kennewick, WA 99336-2950',
      tags: 'Vocational rehabilitation, Space rentals',
      category: 'Disability Services'
    },
    // Add more locations as needed
  ];
  const educationalInstitutions = [
    { 
      name: 'Columbia Basin College',
      description: 'a',
      link: 'https://www.columbiabasin.edu/connect/outreach-opportunities/outreach-recruitment.html',
      coordinates: [46.274447, -119.293545],
      address: '2600 N. 20th Ave., Pasco, WA 99301',
      tags: 'computer access, charging stations',
      category: 'Educational Institutions'
    },
    { 
        name: 'Washington State University Tri-Cities',
        description: 'Public research university',
        link: 'https://tricities.wsu.edu/',
        coordinates: [46.2637, -119.1245],
        address: '2710 Crimson Way, Richland, WA 99354',
        tags: 'Education, Research, College, University, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Pacific Northwest University of Health Sciences (PNWU)',
        description: 'Private medical school',
        link: 'https://www.pnwu.edu/',
        coordinates: [46.2657, -119.2079],
        address: '200 University Parkway, Yakima, WA 98901',
        tags: 'Education, Medical, College, University, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Tri-Tech Skills Center',
        description: 'Vocational training center',
        link: 'https://www.tritech.edu/',
        coordinates: [46.2353, -119.1612],
        address: '5929 W. Metaline Ave., Kennewick, WA 99336',
        tags: 'Education, Vocational Training, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Kamiakin High School',
        description: 'Public high school',
        link: '',
        coordinates: [46.2157, -119.1848],
        address: '600 N. Arthur St., Kennewick, WA 99336',
        tags: 'Education, High School, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Hanford High School',
        description: 'Public high school',
        link: '',
        coordinates: [46.2523, -119.2022],
        address: '450 Hanford St., Richland, WA 99354',
        tags: 'Education, High School, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Richland High School',
        description: 'Public high school',
        link: '',
        coordinates: [46.2857, -119.2708],
        address: '930 Long Ave., Richland, WA 99354',
        tags: 'Education, High School, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Kennewick High School',
        description: 'Public high school',
        link: '',
        coordinates: [46.2057, -119.1638],
        address: '500 S. Dayton St., Kennewick, WA 99336',
        tags: 'Education, High School, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Delta High School',
        description: 'Public high school',
        link: '',
        coordinates: [46.3102, -119.3667],
        address: '1400 W. 4th Ave., Richland, WA 99354',
        tags: 'Education, High School, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
      { 
        name: 'Southridge High School',
        description: 'Public high school',
        link: '',
        coordinates: [46.2553, -119.1903],
        address: '3520 Southridge Blvd., Kennewick, WA 99338',
        tags: 'Education, High School, Computer Access, Charging Stations',
        type: 'Educational Institutions'
      },
]

// end of hardcode locations


      // Create custom icon
      const libraryIcon = L.icon({
        iconUrl: libraryicon,
        iconSize: [32, 32],
      });

      const schoolIcon = L.icon({
        iconUrl: schoolicon,
        iconSize: [32, 32],
      });

      const officeIcon = L.icon({
        iconUrl: officeicon,
        iconSize: [32, 32],
      });
      const vocationalIcon = L.icon({
        iconUrl:vocationalicon,
        iconSize: [32, 32],
      });

      const disabilityIcon = L.icon({
        iconUrl: disabilityofficeicon,
        iconSize: [32, 32],
      });

 //  markers for libraries
 if (showLibraries) {
 libraries.forEach(library => {
    L.marker(library.coordinates, { icon: libraryIcon })
    .bindPopup(`
    <b>${library.name}</b><br>
    ${library.description}<br>
    <a href="#">More Info</a>
  `)
  .addTo(mapRef.current);
});}

// Create markers for community services offices
if (showCommunityServicesOffices) {
    communityServicesOffices.forEach(location => {
      L.marker(location.coordinates, { icon: officeIcon })
        .bindPopup(`
          <b>${location.name}</b><br>
          ${location.description}<br>
          Address: ${location.address}<br>
          Tags: ${location.tags}<br>
          <a href="${location.link}" target="_blank">More Info</a>
        `)
        .addTo(mapRef.current);
    });
  }
  // Create markers for libraries
  if (showLibraries) {
    libraries.forEach(location => {
      L.marker(location.coordinates, { icon: libraryIcon })
        .bindPopup(`
          <b>${location.name}</b><br>
          ${location.description}<br>
          Address: ${location.address}<br>
          Tags: ${location.tags}<br>
          <a href="${location.link}" target="_blank">More Info</a>
        `)
        .addTo(mapRef.current);
    });
  }
  // Create markers for vocational and social services
if (showVocationalAndSocialServices) {
    vocationalAndSocialServices.forEach(location => {
      L.marker(location.coordinates,  { icon:vocationalIcon })
        .bindPopup(`
          <b>${location.name}</b><br>
          ${location.description}<br>
          Address: ${location.address}<br>
          Tags: ${location.tags}<br>
          <a href="${location.link}" target="_blank">More Info</a>
        `)
        .addTo(mapRef.current);
    });
  }
  // Create markers for disability services
  if (showDisabilityServices) {
    disabilityServices.forEach(location => {
      L.marker(location.coordinates,  { icon: disabilityIcon })
        .bindPopup(`
          <b>${location.name}</b><br>
          ${location.description}<br>
          Address: ${location.address}<br>
          Tags: ${location.tags}<br>
          <a href="${location.link}" target="_blank">More Info</a>
        `)
        .addTo(mapRef.current);
    });
  }
  // Create markers for educational institutions
if (showEducationalInstitutions) {
    educationalInstitutions.forEach(location => {
      L.marker(location.coordinates,  { icon: schoolIcon })
        .bindPopup(`
          <b>${location.name}</b><br>
          ${location.description}<br>
          Address: ${location.address}<br>
          Tags: ${location.tags}<br>
          <a href="${location.link}" target="_blank">More Info</a>
        `)
        .addTo(mapRef.current);
    });
  }
},[ showLibraries, showCommunityServicesOffices, showLibrarie,
    showVocationalAndSocialServices, showDisabilityServices,
    showEducationalInstitutions]);



  // Function to handle checkbox change for libraries
  const handleLibrariesChange = () => {
    setShowLibraries(!showLibraries);
  };
// Function to handle checkbox change for community services offices
const handleCommunityServicesOfficesChange = () => {
    setShowCommunityServicesOffices(!showCommunityServicesOffices);
  };
  
  // Function to handle checkbox change for libraries
  const handleLibrarieChange = () => {
    setShowLibrarie(!showLibrarie);
  };
  
  // Function to handle checkbox change for vocational and social services
  const handleVocationalAndSocialServicesChange = () => {
    setShowVocationalAndSocialServices(!showVocationalAndSocialServices);
  };
  
  // Function to handle checkbox change for disability services
  const handleDisabilityServicesChange = () => {
    setShowDisabilityServices(!showDisabilityServices);
  };
  
  // Function to handle checkbox change for educational institutions
  const handleEducationalInstitutionsChange = () => {
    setShowEducationalInstitutions(!showEducationalInstitutions);
  };
  const handleApplyFilter = () => {
    // Handle applying filter here
    // You can collect selected filters and apply them to your map or other data
    console.log("Applying filter...");
  };

  return (
    <div  className="map-container">

      <div className="sidebar-container">  
      <div className="filter-container">
        {/* <div className='filter-header'>Services offered</div>
        <div id="filter-options">
          <label className="toggle-label"><input type="checkbox" name="vocational-services" /> Vocational Services</label>
          <label className="toggle-label"><input type="checkbox" name="technology-lending" /> Technology Lending</label>
          <label className="toggle-label"><input type="checkbox" name="technology-charging" /> Technology Charging</label>
          <label className="toggle-label"><input type="checkbox" name="internet-hotspots" /> Internet Hotspots</label>
        </div> */}
      </div>

      <div className='toggle-container' >
      <div className='filter-header'>Location Type</div>
      <div>
      <label className="toggle-label"><input type="checkbox" checked={showLibraries} onChange={handleLibrariesChange} />Libraries</label>
      <label className="toggle-label"><input type="checkbox" checked={showCommunityServicesOffices} onChange={handleCommunityServicesOfficesChange} />Community Services Offices</label>
        <label className="toggle-label"><input type="checkbox" checked={showVocationalAndSocialServices} onChange={handleVocationalAndSocialServicesChange} />Vocational and Social Services</label>
        <label className="toggle-label"><input type="checkbox" checked={showDisabilityServices} onChange={handleDisabilityServicesChange} />Disability Services</label>
        <label className="toggle-label"><input type="checkbox" checked={showEducationalInstitutions} onChange={handleEducationalInstitutionsChange} />Educational Institutions</label>

      </div>
      </div>
      </div>
      < div className='justmap'>
      <div id="map"  style={{ width: '100%', height: '100%' }} />
    </div>
    </div>
  );
};


export default Map;
