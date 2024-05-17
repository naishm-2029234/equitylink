import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/BudgetingBanner.jpg";
import b1 from "../img/1.jpg";
import b2 from "../img/2.jpg";
import b3 from "../img/3.jpg";

// If you are on this page then you are on step 3 of program implementation.
// when it comes to finding funds for your digital literacy program, we suggest
// partnering with orginzation such as Goodwill.

// the following chart displays steps for creating partnerships with organizations

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
d
                <h3>Funding Resources for Your Initiatives</h3>
            <p>
            If you are on this page, you have reached step 3 of program implementation. To secure funding for your digital literacy program, we recommend partnering with organizations such as Goodwill. The following diagram outlines the steps for creating successful partnerships with organizations.
            </p>
            <br/>
            <br/>
            

            <img src={b2}/>
            <br/>
            <br/>

  
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
