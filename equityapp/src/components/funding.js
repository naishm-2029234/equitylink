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
                  Our funding section provides resources to help you access grants for your initiatives. We prioritize community and smaller grants, aiming to support less-supported organizers.             
                  We also suggest partnering with organizations like Goodwill offices for free program implementation.

                  Explore our funding section for these resources and use our funding calculator to estimate your financial needs for your program.
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
