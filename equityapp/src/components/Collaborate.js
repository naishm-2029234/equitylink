import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Collaborate.jpg";

function funding() {
    return (
        <div>
            <div class="banner">
                <!-- <img src={banner} alt="Banner Image" /> -->
                <img src="BudgetingBanner.jpg" alt="Banner Image" />
                <div class="banner-text">
                    <h1>Collaborate with Local Organizations</h1>
                </div>
            </div>

            <div class="about-us">
                <p>
                  It is possible to expand the influence you have and get access to a bigger number of facilities in order to establish connections with businesses and groups in the surrounding area. In order to share information, skills, and tools, work together with businesses, charity organizations,</br>
                   and educational institutions. One thing that could happen if this joint method is put into action is the growth of a larger network, the chance of matching funding choices, as well as the sharing of resources. By cooperating with one another, it is possible to build a more solid support</br>
                    system for the activities, which will eventually end up in those projects enduring for a longer length of time. Participating in your community and building strong relationships is important to you, and this plan may help you show potential funding sources that you are serious about doing those things.
                </p>
            </div>
        </div>
    );
}

export default Collaborate;
