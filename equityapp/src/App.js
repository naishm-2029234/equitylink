import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar';
import FindingResources from './components/findresources';
import Budgeting from './components/funding';
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
                    <Route path="/funding" element={<Budgeting />} />
                    <Route path="/practitioner" element={<PractitionerToolkit />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/interactivemap" element={<Interactivemap />} /> 
                    <Route path="/insights" element={<Insights />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
