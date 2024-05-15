import React from 'react';
import { NavLink } from "react-router-dom";
import banner from "../img/Offer.jpg";

function Offer() {
    return (
        <div>
            <div class="banner">
                <img src={banner} alt="Banner Image"/>
                <div class="banner-text">
                    <h1>Offer Language-Specific Resources</h1>
                </div>
            </div>

            <div className="video-container">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/BMHr6l5SsFs"
                        title="Mastering Education Policy: Budgeting and Resource Allocation" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="about-us1">
                <p>
                    - Budgeting and resource allocation are discussed in "Mastering Education Policy: Budgeting and
                    Resource Allocation." Talking about education policy is the major topic, but the ideas talked about
                    can be useful in many other areas, like community projects.<br/>
                    - For example, understanding basic words, how important budgeting is, and how to best use resources are just a few examples. It highlights language-specific resources and the necessity to strategically allocate resources to satisfy a community's varied requirements.<br/>
                    - To promote equality and accessibility, community organizations may invest money on language-specific tools and resources, such as translated materials or multilingual personnel, similar to how schools deliver a high-quality education on a budget. The video gives resource sharing and budgeting tips for language-specific community program initiatives.
                </p>
            </div>
        </div>
    );
}

export default Offer;
