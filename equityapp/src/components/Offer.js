import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Offer.jpg";

function Offer() {
    return (
        <div>
            <div class="banner">
                <img src={banner} alt="Banner Image" />
                <div class="banner-text">
                    <h1>Offer Language-Specific Resources</h1>
                </div>
            </div>

            <div class="about-us">
                <p>
                  In the case that you are unable to communicate adequately, it may be difficult for you to participate in community activities and to access instruments. Providing tools that are tailored to the language that your audience speaks and have been modified to meet their
                   language requirements is one approach that can be used to circumvent this issue. In order to reach this goal, it might be necessary to have speakers at events, have materials translated, or hire staff members who can speak more than one language. When you do this,
                    you will make the environment more welcoming for individuals from all walks of life, ensuring that everyone has the opportunity to benefit from the activities that you are participating in. Using a method that includes everyone could help get more money from handouts
                     that are meant to help a wide range of groups of people.
                </p>
            </div>
        </div>
    );
}

export default Offer;
