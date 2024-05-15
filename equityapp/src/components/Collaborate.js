import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Collaborate.jpg";

function Collaborate() {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="Banner Image"/>
                <div className="banner-text">
                    <h1>Collaborate with Local Organizations</h1>
                </div>
            </div>

            <div className="video-container">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/Auv2cNbrVcs"
                        title="Budgeting &amp; Forecasting For Nonprofits - A Plan for Financial Success | Donorbox Webinar 📢📢"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="about-us1">
                <p>
                    - Working with local groups to promote community events is clearly linked to the video on budgeting
                    for nonprofits. It does this by giving information on how to best use resources, recognise financial
                    risks, and make budgeting faster using technology.<br/>
                    - Together with businesses, nonprofits, and schools, community leaders can make community projects more effective, build networks, find more funding options, and share resources.<br/>
                    - Through this, a better support system for long-term community involvement will eventually grow. You can do this by learning how to make a budget that works for nonprofits.
                </p>
            </div>
        </div>
    );
}

export default Collaborate;
