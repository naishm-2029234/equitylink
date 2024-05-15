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

            <div className="video-container">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/TUKN7rdVwxw"
                        title="Technology Budgeting Fundamentals" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="about-us1">
                <p>
                    - This YouTube video called "Technology Budgeting Fundamentals" is very helpful for understanding
                    how to carefully plan and deploy company resources for technology. By providing advice on budgeting
                    for necessary technological tools and resources like computers, apps, and software, it links to the issue of giving access to technology in community programs.<br/>
                    - When the video talks about things like buying, keeping, and improving technology, it makes sense that budgeting for these things is important to make sure that programs run smoothly and goals are met.<br/>
                    - It is a good way to learn how to budget for technology in community projects. This will help the projects succeed and give more people access to technology.
                </p>
            </div>
        </div>
    );
}

export default Provide;
