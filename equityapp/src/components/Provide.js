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
                In today's world, community groups rely heavily on technology, making the ability to utilize these tools invaluable. Providing your staff and community members with tools such as computers, tablets, and software ensures their full participation in events and activities. Technological advancements have simplified access to information and facilitated interactions, enhancing efficiency. It's crucial to allocate funds in your budget for acquiring, maintaining, and upgrading technology to support these advancements. This investment not only improves program efficiency but also helps achieve program goals more effectively. By prioritizing technology, you can stay ahead of the competition and make a substantial impact in your community.
                </p>
            </div>
        </div>
    );
}

export default Provide;
