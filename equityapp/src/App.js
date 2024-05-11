import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navigation from './components/navbar';
import FindingResources from './components/findresources';
import Budgeting from './components/funding';

import Invest from './components/Invest';
import Assess from './components/Assess';
import Offer from './components/Offer';
import Collaborate from './components/Collaborate';
import Support from './components/Support';
import Provide from './components/Provide';


import PractitionerToolkit from './components/practitioner';
import AboutUs from './components/AboutUs';
import Homepage from './components/homepage';
import Interactivemap from './components/interactivemap'; // New import
import Insights from './components/insights'; // New import

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    
                    {/* <Route path="/findresources" element={<FindingResources />} /> */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="/funding" element={<Budgeting />} />
                    
                    <Route path="/Assess" element={<Assess />} />
                    <Route path="/Invest" element={<Invest />} />
                    <Route path="/Offer" element={<Offer />} />
                    <Route path="/Collaborate" element={<Collaborate />} />
                    <Route path="/Support" element={<Support />} />
                    <Route path="/Provide" element={<Provide />} />
                    <Route path="/practitioner" element={<PractitionerToolkit />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/interactivemap" element={<Interactivemap />} /> 
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
