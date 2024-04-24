import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import equityLinkLogo from '../img/equitylink-logo.png';
import '../index.css';

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
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
                  <select id="language-select">
                      <option value="english">English</option>
                      <option value="spanish">Español</option>
                  </select>
                  <i className="fas fa-globe"></i>
              </div>
          </div>
      </nav>
  );
};

export default Navigation;

/*
const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='navbar'>
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
      <ul>
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
        <div className="language">
          <select id="language-select">
            <option value="english">English</option>
            <option value="spanish">Español</option>
          </select>
          <i className="fas fa-globe"></i>
        </div>
      </ul>
    </div>
  );
};

export default Navigation; */