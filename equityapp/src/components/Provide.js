import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Provide.jpg";

function Provide() {
    return (
        <div>
            <div class="banner">
                <img src={banner} alt="Banner Image" />
                <div class="banner-text">
                    <h1>Provide Access to Technology</h1>
                </div>
            </div>

            <div class="about-us">
                <p>
                  As a result of the fact that community groups in the current world are reliant on technology in a number of different ways, the capability to make use of these tools is of the highest value. One way to make sure that your staff and people 
                  can fully participate in the event is to give them tools and resources like computers, tablets, and software. It is now more simpler to get new information and interact with other people as a result of the breakthroughs that have been provided 
                  by advances in technology. It also makes work more efficient and it is important to make sure that your budget includes money for buying, maintaining, and improving technology. The goals of the program will be easier to achieve as a result of this 
                  improvement. Putting this money into it will help you stay ahead of the competition and produce results that make a big difference in the situation.
                </p>
            </div>
        </div>
    );
}

export default Provide;
