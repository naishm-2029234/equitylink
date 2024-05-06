import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/BudgetingBanner.jpg";

function funding() {
    return (
        <div>
            <div class="banner">
                <img src={banner} alt="Banner Image" />
                <div class="banner-text">
                    <h1>BUDGETING</h1>
                </div>
            </div>

            <div class="about-us">
                <p>
                The budgeting page serves as a comprehensive resource hub designed to assist in the financial planning and allocation of 
                resources for community initiatives. Whether you're looking to optimize your budget allocation or seeking strategies to 
                stretch your resources further, this page offers valuable insights and practical tips to help you maximize the impact of 
                your programs within underserved communities.
                </p>
            </div>
            <div class="centered">
                <h2>Best Use For Funding</h2>
            </div>
            <div class="centered">
                <ul class="list">
                    <li class="list-item">Assess Community Needs
                         <NavLink to="/Assess" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li class="list-item">Invest in Training Programs
                        <NavLink to="/Invest" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li class="list-item">Provide Access to Technology
                        <NavLink to="/Provide" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li class="list-item">Offer Language-Specific Resources
                        <NavLink to="/Offer" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li class="list-item">Support Community Engagement
                        <NavLink to="/Support" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li class="list-item">Collaborate with Local Organizations
                        <NavLink to="/Collaborate" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default funding;
