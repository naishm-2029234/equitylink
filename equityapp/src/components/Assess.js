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
                Being highly attuned to the specific needs of the community is paramount for any successful program. Conducting thorough research to identify the primary areas requiring assistance or support is crucial. This might involve polling residents, analyzing demographic data, or consulting community leaders. Once you have a clear understanding of the situation, it's important to adapt your approach accordingly. Aligning your efforts with the community's needs enhances their impact and improves your chances of securing loans and other funding sources. In essence, understanding the community's needs is essential. For instance, in an area lacking affordable healthcare, a program could focus on establishing free medical centers or offering health education classes. By tailoring its activities to meet these identified needs, a program can significantly enhance its impact and increase its chances of receiving funding.
                </p>
            </div>
        </div>
    );
}

export default Assess;
