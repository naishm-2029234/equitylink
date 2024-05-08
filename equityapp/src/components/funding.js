import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/BudgetingBanner.jpg";
import b1 from "../img/b1.jpg";
import b2 from "../img/b2.jpg";
import b3 from "../img/b3.jpg";

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
                <h2>About Us</h2>
                <h3>Funding Resources for Your Initiatives</h3>
            <p>
                Our funding section provides resources to help you access grants for your initiatives. We prioritize community and smaller grants, aiming to support less-supported organizers.
            </p>
            <img src={b1}/>
            <h3>Partnerships for Program Implementation</h3>
            <p>
                We also suggest partnering with organizations like Goodwill offices for free program implementation.
            </p>
            <img src={b2}/>
            <h3>Explore Our Funding Section</h3>
            <p>
                Explore our funding section for these resources and use our funding calculator to estimate your financial needs for your program.
            </p>
            <img src={b3} />
            </div>

            <div class="container">
                <div class="box">
                    <h1 class="bold">Budgeting Calculator</h1>
                </div>
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
