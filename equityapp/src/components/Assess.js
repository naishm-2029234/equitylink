import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Assess.jpg";

function Assess() {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="Banner Image"/>
                <div className="banner-text">
                    <h1>Assess Community Needs</h1>
                </div>
            </div>

            <div className="video-container">
                <iframe width="3885" height="1705" src="https://www.youtube.com/embed/8-uEZSzCM9Y"
                        title="Community Needs Assesment" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="about-us1">
                <p>
                    - The video shows how a community needs assessment can help figure out what people in the area need
                    and what tools are out there to help them and it gives a quick explanation of what a needs
                    assessment is, how it is done, and how the results can be used and shared with others.<br/>
                    - Use the results to find areas of need, which stresses how important study and community
                    involvement are. Understanding what the community needs helps groups tailor their work to real
                    problems, which increases the effectiveness of their programs and their access to resources and
                    money.<br/>
                    - The video supports figuring out what the community needs in order to improve the creation and
                    outcomes of programs.
                </p>
            </div>
        </div>
    );
}

export default Assess;
