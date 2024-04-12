import React from 'react';
import banner from "../img/BudgetingBanner.jpg";

function funding() {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="Banner Image" />
                <div className="banner-text">
                    <h1>BUDGETING</h1>
                </div>
            </div>

            <div className="about-us">
                <p>
                  Our funding section provides resources to help you access grants for your initiatives. We prioritize community and smaller grants, aiming to support less-supported organizers. 
                  We also suggest partnering with organizations like Goodwill offices for free program implementation. Explore our funding section for these resources and use our funding calculator to estimate your financial needs for your program.
                </p>
            </div>

            <div className="container">
                <div className="box">
                    <h1 className="bold">Budgeting Calculator</h1>
                </div>
            </div>
            <div className="centered">
                <h2>Best Use For Funding</h2>
                <ul className="list">
                    <li className="list-item">Assess Community Needs
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Invest in Training Programs
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Provide Access to Technology
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Offer Language-Specific Resources
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Support Community Engagement
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Collaborate with Local Organizations
                        <div className="alignright">+</div>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default funding;
