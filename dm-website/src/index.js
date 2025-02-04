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
import Register from './views/Register';
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
import BlogList from './components/BlogList';
import Events from './views/Events';
import NotFound from './views/NotFound';
import MainEvent from './views/MainEvent';
import Moralloween from './views/Moralloween';
import FallKickoff from './views/FallKickoff';
import MiniMarathons from './views/MiniMarathons';
import TransformToday from './views/TransformToday';
import Miracles5k from './views/Miracles5k';
import ELP from './views/ELP';

import BeyondThisMoment from './views/blogs/BeyondThisMoment';
import BeyondOurselves from './views/blogs/BeyondOurselves';
import BeyondThisSummer from './views/blogs/BeyondThisSummer';
import BeyondThisGeneration from './views/blogs/BeyondThisGeneration';
import FindingYourDMFamily from './views/blogs/FindingYourDMFamily';
import CampusClash from './views/blogs/CampusClash';
import ChildHealthDay from './views/blogs/ChildHealthDay';
import MiracleMaker from './views/blogs/MiracleMaker';
import Thankfulness from './views/blogs/Thankfulness';
import GiftOfHope from './views/blogs/GiftOfHope';
import BehindTheScenes from './views/blogs/BehindTheScenes';
import LifetimeOfLaughter from './views/blogs/LifetimeOfLaughter';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/cmnhospitals" element={<CMNHospitals />} />
        <Route path="/miraclefamilies" element={<MiracleFamilies />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/register-to-fundraise" element={<Fundraising />} />
        <Route path="/donordrive" element={<DonorDrive />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/employeematching" element={<EmployeeMatching />} />
        <Route path="/fundraisingguide" element={<FundraisingGuide />} />
        <Route path="/partners" element={<Sponsors />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/miraclemakers" element={<MiracleMakers />} />
        <Route path="/captainteams" element={<Captains />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/beyondthismoment" element={<BeyondThisMoment />} />
        <Route path="/blog/beyondourselves" element={<BeyondOurselves />} />
        <Route path="/blog/beyondthissummer" element={<BeyondThisSummer />} />
        <Route path="/blog/beyondthisgeneration" element={<BeyondThisGeneration />} />
        <Route path="/blog/findingyourdmfamily" element={<FindingYourDMFamily />} />
        <Route path="/blog/campusclash" element={<CampusClash />} />
        <Route path="/blog/childhealthday" element={<ChildHealthDay />} />
        <Route path="/blog/miraclemaker" element={<MiracleMaker />} />
        <Route path="/blog/thankfulness" element={<Thankfulness />} />
        <Route path="/blog/giftofhope" element={<GiftOfHope />} />
        <Route path="/blog/behindthescenes" element={<BehindTheScenes />} />
        <Route path="/blog/lifetimeoflaughter" element={<LifetimeOfLaughter />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mainevent" element={<MainEvent />} />
        <Route path="/moralloween" element={<Moralloween />} />
        <Route path="/fallkickoff" element={<FallKickoff />} />
        <Route path="/minimarathons" element={<MiniMarathons />} />
        <Route path="/transformtoday" element={<TransformToday />} />
        <Route path="/miracles5k" element={<Miracles5k />} />
        <Route path="/emergingleaders" element={<ELP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
