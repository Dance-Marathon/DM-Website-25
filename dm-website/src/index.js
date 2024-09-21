import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './views/Contact';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

import GetInvolved from './views/GetInvolved';
import Donate from './views/Donate';
import Shop from './views/Shop';
import About from './views/About';
import OurStory from './views/OurStory';
import CMNHospitals from './views/CMNHospitals';
import MiracleFamilies from './views/MiracleFamilies';
import Applications from './views/Applications';
import Fundraising from './views/Fundraising';
import DonorDrive from './views/DonorDrive';
import Organizations from './views/Organizations';
import EmployeeMatching from './views/EmployeeMatching';
import FundraisingGuide from './views/FundraisingGuide';
import Sponsors from './views/Sponsors';
import Alumni from './views/Alumni';
import Ambassadors from './views/Ambassadors';
import MiracleMakers from './views/MiracleMakers';
import Captains from './views/Captains';
import BlogDetails from './components/BlogDetails';
import BlogList from './components/BlogList';
import Events from './views/Events';
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/cmnhospitals" element={<CMNHospitals />} />
        <Route path="/miraclefamilies" element={<MiracleFamilies />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/fundraising" element={<Fundraising />} />
        <Route path="/donordrive" element={<DonorDrive />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/employeematching" element={<EmployeeMatching />} />
        <Route path="/fundraisingguide" element={<FundraisingGuide />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/miraclemakers" element={<MiracleMakers />} />
        <Route path="/captains" element={<Captains />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
