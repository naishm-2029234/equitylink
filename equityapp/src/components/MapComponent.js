import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../map.css';
import libraryicon from '../img/icons/library.png';
import schoolicon from '../img/icons/schoolicon.png';
import officeicon from '../img/icons/office.png';
import vocationalicon from '../img/icons/vocational.png';
import disabilityofficeicon from '../img/icons/disabilityoffice.png';
import markersData from './markerdatabase.csv'; // Import CSV data
import Papa from 'papaparse';
import CardView from './CardViewmap';
// import '../interactivemap.css';

const Map = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]); // State to hold marker data
  const [showLibraries, setShowLibraries] = useState(true); // State to toggle libraries visibility
  const [showCommunityServicesOffices, setShowCommunityServicesOffices] = useState(true);
  const [showVocationalAndSocialServices, setShowVocationalAndSocialServices] = useState(true);
  const [showEducationalInstitutions, setShowEducationalInstitutions] = useState(true);
  const [filteredMarkers, setFilteredMarkers] = useState([]); // State to hold filtered markers


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
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              [
                -118.32286601514267,
                46.30042953239732
              ],
              [
                -118.32240916572194,
                46.294717099061444
              ],
              [
                -118.31235473647712,
                46.29506170150748
              ],
              [
                -118.30267484762793,
                46.29554985101055
              ],
              [
                -118.30562676184175,
                46.3032128472278
              ],
              [
                -118.32294908608708,
                46.30375902997065
              ],
              [
                -118.32286601514267,
                46.30042953239732
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
    mapRef.current = L.map('map').setView([46.2148, -119.1367], 9); // Centered on Tri-Cities, Washington

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    L.geoJSON(tricitiesData, {
      style: {
        color: 'yellow',
        weight: 2,
        opacity: .5
      }
    }).addTo(mapRef.current);

    // Parse CSV data and set markers state
    parseCSVData();
  }, [showLibraries, showCommunityServicesOffices,
    showVocationalAndSocialServices,
    showEducationalInstitutions]);
  const handleCheckboxChange = (category, setShowCategory) => {
    setShowCategory(prevState => !prevState);
  };
  
  const parseCSVData = async () => {
    try {
      const response = await fetch(markersData);
      const csvData = await response.text();
    
      Papa.parse(csvData, {
        header: true,
        complete: function(results) {
          const markers = results.data.map(row => {
            const address = row['Address'];
            const latitude = parseFloat(row['Latitude']);
            const longitude = parseFloat(row['Longitude']);
            const category = row['Category'];
            const name = row['Name'];
            const tag = row['Tag'];
            const link = row['Link'];
            console.log('Marker Data:', category, name, tag, link); // Log marker data
  
            // Check if latitude and longitude are valid numbers
            if (!isNaN(latitude) && !isNaN(longitude)) {
              console.log('Parsed LatLng:', latitude, longitude); // Log parsed latitude and longitude
              return {
                address,
                coordinates: [latitude, longitude],
                category, 
                name,
                tag,
                link
              };
            } else {
              console.error('Invalid latitude or longitude:', latitude, longitude);
              return null;
            }
          }).filter(marker => marker !== null); // Remove markers with invalid coordinates
  
          // Filter markers based on checkbox selection
          const filteredMarkers = markers.filter(marker => {
            switch (marker.category) {
              case 'Libraries':
                return showLibraries;
              case 'Community Services Offices':
                return showCommunityServicesOffices;
              case 'Vocational and Social Services':
                return showVocationalAndSocialServices;
              case 'Educational Institutions':
                return showEducationalInstitutions;
              default:
                return true;
            }
          });
  
          setFilteredMarkers(filteredMarkers);
  
          // icons per category
          const icons = {
            'Community Services Offices': L.icon({ iconUrl: officeicon, iconSize: [32, 32] }),
            'Libraries': L.icon({ iconUrl: libraryicon, iconSize: [32, 32] }),
            'Vocational and Social Services': L.icon({ iconUrl: vocationalicon, iconSize: [32, 32] }),
            'Educational Institutions': L.icon({ iconUrl: schoolicon, iconSize: [32, 32] }),
          };
  
          // Remove existing markers from the map
          mapRef.current.eachLayer(layer => {
            if (layer instanceof L.Marker) {
              mapRef.current.removeLayer(layer);
            }
          });
  
          // Create markers on the map for filtered markers
          filteredMarkers.forEach(marker => {
            const icon = icons[marker.category];
            L.marker(marker.coordinates, { icon })
              .bindPopup(`
                <b>${marker.name}</b><br>
                ${marker.category}<br>
                Address: ${marker.address}<br>
                Tags: ${marker.tag}<br>
                <a href="${marker.link}" target="_blank">More Info</a>
              `)
              .addTo(mapRef.current);
          });
        },
        error: function(error) {
          console.error('Error parsing CSV data:', error);
        }
      });
    } catch (error) {
      console.error('Error fetching CSV data:', error);
    }
  };
  

  return (
    <div className="map-container">
      <div className="sidebar-container"> 
        <div className='toggle-container'>
          <div className='filter-header'>
            Location Type</div>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" checked={showLibraries} onChange={() => handleCheckboxChange('Libraries', setShowLibraries)} />
              <img className= 'filteroption-image' src={libraryicon} alt="Library" />
              Libraries
            </label>
            <label>
              <input type="checkbox" checked={showCommunityServicesOffices} onChange={() => handleCheckboxChange('Community Services Offices', setShowCommunityServicesOffices)} />
              <img className= 'filteroption-image' src={officeicon} />
              Public Community Social Services
            </label>
            <label>
              <input type="checkbox" checked={showVocationalAndSocialServices} onChange={() => handleCheckboxChange('Vocational and Social Services', setShowVocationalAndSocialServices)} />
              <img className= 'filteroption-image' src={vocationalicon} />
              Vocational Services
            </label>
            <label>
              <input type="checkbox" checked={showEducationalInstitutions} onChange={() => handleCheckboxChange('Educational Institutions', setShowEducationalInstitutions)} />
              <img className= 'filteroption-image' src={schoolicon} />
              Educational Institutions
            </label>
        </div>
        <div className="cardview-container">
            <CardView filteredMarkers={filteredMarkers} />
        </div>
        </div>
      </div>

      <div className="justmap">
        <div id="map" style={{ width: '100%', height: '500px' }} />
      </div>
    </div>
  );
};

export default Map;
