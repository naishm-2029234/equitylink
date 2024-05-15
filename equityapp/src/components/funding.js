import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/BudgetingBanner.jpg";
import b1 from "../img/1.jpg";
import b2 from "../img/2.jpg";
import b3 from "../img/3.jpg";

function funding() {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="Banner Image" />
                <div className="banner-text">
                    <h1>BUDGETING</h1>
                </div>
            </div>
            <div className="about-us1">

                <h3>Funding Resources for Your Initiatives</h3>
            <p>
                Our funding section provides resources to help you access grants for your initiatives. We prioritize community and smaller grants, aiming to support less-supported organizers.
            </p>
            <img src={b1}/>
            <br/>
            <br/>
            <h3>Partnerships for Program Implementation</h3>
            <p>
                We also suggest partnering with organizations like Goodwill offices for free program implementation.
            </p>
            <img src={b2}/>
            <br/>
            <br/>
            <h3>Explore Our Funding Section</h3>
            <p>
                Explore our funding section for these resources to estimate your financial needs for your program.
            </p>
            <img src={b3} />
            </div>
           <br/>
            <br/>
            <div className="centered">
                <h2>Best Use For Funding</h2>
            </div>
            <div className="centered">
                <ul className="list">
                    <li className="list-item">Assess Community Needs
                         <NavLink to="/Assess" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li className="list-item">Invest in Training Programs
                        <NavLink to="/Invest" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li className="list-item">Provide Access to Technology
                        <NavLink to="/Provide" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li className="list-item">Offer Language-Specific Resources
                        <NavLink to="/Offer" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li className="list-item">Support Community Engagement
                        <NavLink to="/Support" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                    <li className="list-item">Collaborate with Local Organizations
                        <NavLink to="/Collaborate" activeClassName="active"><div class="alignright">+</div></NavLink>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default funding;
