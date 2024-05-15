import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Support.jpg";

function Support() {
    return (
        <div>
            <div class="banner">
                <img src={banner} alt="Banner Image" />
                <div class="banner-text">
                    <h1>Support Community Engagement</h1>
                </div>
            </div>

            <div className="video-container">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/H0xLucio3Z4"
                        title="How to Fill Out the Budget Template – Building a Budget from Scratch" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="about-us1">
                <p>
                    - The video called "Budgeting for Community Engagement" shows you how to set aside money for
                    community engagement projects in the best way possible.<br/>
                    - Community leaders can improve their efforts to get people involved by learning how to make a budget that fits the needs of the group and makes the most of the resources.<br/>
                    - The video's advice helps set goals for tasks, figure out what needs your attention, and make sure you have long-term success by keeping up your efforts over time. Really good budgeting is very important for adapting to changing community needs and making community relationships stronger.
                </p>
            </div>
        </div>
    );
}

export default Support;
