import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import ServiceDetail from "./Components/ServiceDetails";

export const pageview = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-GZ7490SRML', {
      page_path: url,
    });
  }
};

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Router>
      <RouteChangeTracker />
      <div className="App overflow-hidden flex flex-col min-h-[100vh] justify-evenly">
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
