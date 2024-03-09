import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import SamplePage from "./Components/Sample/SamplePage";
import ServiceDetail from "./Components/ServiceDetails";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Router>
      <div className="App overflow-hidden">
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sample" element={<SamplePage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
