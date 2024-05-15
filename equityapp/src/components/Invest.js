import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Invest.jpg";

function Invest() {
    return (
        <div>
            <div class="banner">
                <img src={banner} alt="Banner Image" />
                <div class="banner-text">
                    <h1>Invest in Training Programs</h1>
                </div>
            </div>

            <div class="about-us">
                <p>
                Providing financial resources to training programs is crucial to ensure a competent and productive workforce. It's essential to ensure that your team receives adequate training to deliver exceptional services. This investment in training has a positive ripple effect on the entire community, improving outcomes. Offering ongoing training covering various topics, including professional skills and "soft skills" like leadership and communication, is important. Donors recognize and appreciate investments in organizational growth, which demonstrate a commitment to long-term success. By investing in areas such as hiring, technology, and community engagement, your organization shows a commitment beyond meeting immediate needs, laying a strong foundation for the future. This strategic approach signals to donors that your group has a clear vision, increasing the likelihood of receiving financial support for your cause.
                </p>
            </div>
        </div>
    );
}

export default Invest;
