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

            <div class="about-us">
                <p>
                  When it comes to any activity that is meant to be finished, the participation of members of the community is considered to be of the greatest significance. Offering opportunities for people in the community to take part in events is something that should be done to encourage
                  participation. Some of the options that could be thought about are holding events, setting up advice boards, and creating volunteer programs. Building strong ties with people in the community not only helps people feel like they own what they're doing, but it also makes sure that
                   the programs you offer are meeting the needs of the community. When people are assisted in becoming more involved in their communities, it is possible that this might result in an increase in the amount of financial resources available. Not only would this show that you are serious
                    about success over the long term, but it would also show that you are concerned about involvement at the local level.
                </p>
            </div>
        </div>
    );
}

export default Support;
