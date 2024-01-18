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

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAZ-pDLBFq08WBq3EKyxfQW4nhP7nOIHHo",
//   authDomain: "esperanza-a2eb5.firebaseapp.com",
//   projectId: "esperanza-a2eb5",
//   storageBucket: "esperanza-a2eb5.appspot.com",
//   messagingSenderId: "405249126239",
//   appId: "1:405249126239:web:c1dc6b68524be33b2590ea",
//   measurementId: "G-8PEXWYG0T7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
