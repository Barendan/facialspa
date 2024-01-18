import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import InTouch from "./Components/InTouch";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Services from "./Components/Services";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <InTouch/>
      <Footer />
    </div>
  );
}

export default App;
