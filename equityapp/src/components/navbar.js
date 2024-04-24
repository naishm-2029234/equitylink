import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import equityLinkLogo from '../img/equitylink-logo.png';
import '../index.css';


const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [language, setLanguage] = useState(getCookie("lang") || "en");

  const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
  };

  const changeLang = (event) => {
      const selectedLanguage = event.target.value;
      setCookie("lang", selectedLanguage, 365);
      setLanguage(selectedLanguage);
      window.location.reload();
  };

  return (
      <nav className='navbar'>
          <div className="left-section">
              <NavLink exact to="/homepage" activeClassName="active">
                  <img
                      src={equityLinkLogo}
                      style={{
                          height: '60px',
                          width: '90px',
                          paddingBottom: '10px',
                          marginTop: '0px',
                          paddingTop: '10px',
                      }}
                      alt="Logo"
                  />
              </NavLink>
              <ul className="nav-links">
                  <li
                      className="dropdown"
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                  >
                      <span>Finding Resources &#9662;</span>
                      {showDropdown && (
                          <div className="dropdown-content">
                              <NavLink to="/interactivemap" activeClassName="active">Interactive Map</NavLink>
                              <NavLink to="/insights" activeClassName="active">Insights</NavLink>
                          </div>
                      )}
                  </li>
                  <li><NavLink to="/funding" activeClassName="active">Budgeting</NavLink></li>
                  <li><NavLink to="/practitioner" activeClassName="active">Practitioner Toolkit</NavLink></li>
                  <li><NavLink to="/AboutUs" activeClassName="active">About Us</NavLink></li>
              </ul>
          </div>
          <div className="right-section">
              <div className="language">
                  <select id="language-select" value={language} onChange={changeLang}>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                  </select>
                  <i className="fas fa-globe"></i>
              </div>
          </div>
      </nav>
  );
};

export default Navigation;