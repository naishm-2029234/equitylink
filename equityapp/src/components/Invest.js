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

            <div class="about-us">
                <p>
                  It is of the highest need to give financial resources to training programs in order to guarantee that the workforce will be both competent and productive. Considering this, it is essential to make certain that your team received enough training in order for them to be able to provide exceptional services.
                  The outcome for the community as a whole will ultimately improve as a consequence of how this plays out, and this is the reason why this will happen. It is important to think about how you could offer ongoing training lessons that cover a lot of different topics, such as professional skills
                  as well as "soft skills" like leadership and communication. Donors will see that you care about the long-term survival and success of your organization if you invest in its growth. Your group shows that it cares about more than just meeting current needs by spending money on things
                  like hiring more people, getting new technology, or getting involved in the community. In addition to this, it is concerned with establishing a strong foundation for the ways in which the future will unfold. This way shows donors that your group has a clear goal, which makes them more likely
                  to give money or other forms of financial help to your cause.
                </p>
            </div>
        </div>
    );
}

export default Invest;
