import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Assess.jpg";

function Assess() {
    return (
        <div>
            <div class="banner">
                <img src={banner} alt="Banner Image" />
                <div class="banner-text">
                    <h1>Assess Community Needs</h1>
                </div>
            </div>

            <div class="about-us">
                <p>
                  Being very aware of the specific needs of the community is one of the most important parts of any program that works. It is more than important to do a good amount of research in order to identify the primary areas that need assistance or support. 
                  In order to reach this goal, it might be necessary to poll the people who live in the community, look at the demographic information, or talk to the community leaders. Once you have a better understanding of what is going on, you need to change what you are doing so that it fits with what is going on. 
                  When you use this approach, your efforts will have a bigger impact, and you will have a better chance of getting loans and other forms of funds. Simply put, for a program to work, it's important to know exactly what the community needs – for example, 
                  if a low-income area doesn't have access to cheap health care, a program could focus on setting up free medical centers or health education classes. Programming can make a real difference and improve its chances of getting money from funds and other sources by adjusting its activities to meet these known need.
                </p>
            </div>
        </div>
    );
}

export default Assess;
