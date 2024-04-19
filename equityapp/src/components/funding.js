import React from 'react';
import banner from "../img/BudgetingBanner.jpg";

function funding() {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="Banner Image" />
                <div className="banner-text">
                    <h1>BUDGETING</h1>
                </div>
            </div>

            <div className="about-us">
                <p>
                  Our funding section provides resources to help you access grants for your initiatives. We prioritize community and smaller grants, aiming to support less-supported organizers. 
                  We also suggest partnering with organizations like Goodwill offices for free program implementation. Explore our funding section for these resources and use our funding calculator to estimate your financial needs for your program.
                </p>
            </div>

            <div className="container">
                <div className="box">
                    <h1 className="bold">Budgeting Calculator</h1>
                </div>
            </div>
            <div className="centered">
                <h2>Best Use For Funding</h2>
            </div>
            <div className="centered">
                <ul className="list">
                    <li className="list-item">Assess Community Needs
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Invest in Training Programs
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Provide Access to Technology
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Offer Language-Specific Resources
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Support Community Engagement
                        <div className="alignright">+</div>
                    </li>
                    <li className="list-item">Collaborate with Local Organizations
                        <div className="alignright">+</div>
                    </li>
                </ul>
            </div>
            <div className="budgeting-guidance">
                <h2>Comprehensive Budgeting Guidance</h2>
                <p>Creating a comprehensive budget for program development and implementation is crucial for effective financial management. Follow these step-by-step guidelines to ensure your budget covers all necessary expenses:</p>
                <ol>
                    <li>Identify all program expenses: Take into account personnel costs, materials and supplies, venue rental, marketing and outreach, administrative overhead, and any other relevant expenses.</li>
                    <li>Estimate costs for each expense category: Research and estimate the costs associated with each expense category. Consider factors such as market rates, quantity discounts, and any specific requirements for your program.</li>
                    <li>Account for unforeseen expenses: Set aside a contingency fund to cover unexpected costs or emergencies that may arise during program development and implementation.</li>
                    <li>Maximize limited resources: Explore various strategies to stretch your budget and make the most of limited resources. This includes seeking in-kind donations, negotiating discounts or favorable terms with vendors, and leveraging partnerships for shared expenses.</li>
                    <li>Tracking and managing your budget: Establish a system for tracking and monitoring your program budget. Regularly review actual expenses against budgeted amounts and make adjustments as necessary.</li>
                </ol>
                <p>Additionally, we provide the following resources to assist you in your budgeting process:</p>
                <ul>
                    <li>Templates and examples: Access ready-to-use budget templates and examples that can be customized to fit your program's specific needs. Here's an example of a budget template:</li>
                </ul>
                <table>
                    <tr>
                        <th>Expense Category</th>
                        <th>Estimated Cost</th>
                    </tr>
                    <tr>
                        <td>Personnel Costs</td>
                        <td>$10,000</td>
                    </tr>
                    <tr>
                        <td>Materials and Supplies</td>
                        <td>$5,000</td>
                    </tr>
                    <tr>
                        <td>Venue Rental</td>
                        <td>$2,000</td>
                    </tr>
                    <tr>
                        <td>Marketing and Outreach</td>
                        <td>$3,000</td>
                    </tr>
                    <tr>
                        <td>Administrative Overhead</td>
                        <td>$2,500</td>
                    </tr>
                    <tr>
                        <td>Contingency Fund</td>
                        <td>$1,000</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <th>$23,500</th>
                    </tr>
                </table>
                <ul>
                    <li>Expense guidelines: Get detailed guidelines on common program expenses and how to estimate costs for each category. For example, when budgeting for personnel costs, consider salary/wages, benefits, and payroll taxes.</li>
                    <li>Funding sources: Explore different funding sources, includinggrants, sponsorships, donations, fundraising events, and crowdfunding campaigns. Learn how to identify potential funding opportunities and develop compelling grant proposals.</li>
                    <li>Managing limited resources: Discover strategies to optimize your budget and make the most of limited resources. This includes tips on building relationships with funders and donors, leveraging community partnerships, and implementing cost-saving measures.</li>
                </ul>
            </div>
        </div>

    );
}

export default funding;
