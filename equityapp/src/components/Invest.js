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

            <div className="video-container">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/xRS70tXi1_c"
                        title="Traditional Training Methods" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="about-us1">
                <p>
                    - The video tells about important financial measures, such as how much you spent on training as a
                    whole. If the training is held away from the office or needs travel, the guests' rent, food,
                    transportation, and other costs should be paid for.<br/>
                    - Employers and communities and authorities should think about how much training costs, where their
                    money comes from, and how much they can make. Outsiders may have to pay to go through the
                    training.<br/>
                    - It is important to check to see how much more work has been done since the training program began.
                    People look at things like sales, output, accident rates, and machine wear and tear to figure out
                    how much a program has earned them.
                </p>
            </div>
        </div>
    );
}

export default Invest;
