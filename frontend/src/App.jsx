import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ChardhamPackages from "./components/ChardhamPackages";
import FleetSection from "./components/FleetSection";
import AirChardhamSection from "./components/AirChardhamSection";
import HotelsSection from "./components/HotelsSection";
import FAQSection from "./components/FAQsection";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import AboutUsSection from "./assets/pages/AboutUs";
import Fleet from "./assets/pages/Fleet";
import QueryPopup from "./components/QueryPopup"; // ✅ Popup Component
import SafetyRules from "./assets/pages/SafteyRules";
import ContactUs from "./assets/pages/ContactUs";
import HelicopterSeats from "./components/HelicopterSeats";
import AirAmbulance from "./assets/pages/AirAmbulance";
import AirShooting from "./assets/pages/AirShooting";
import Charter from "./assets/pages/Charter";
import GovernmentSurveys from "./assets/pages/GovermentSurvey";
import PoliticalFlying from "./assets/pages/PoliticalFlying";
import AirWedding from "./assets/pages/AirWedding";
import HeliSkiing from "./assets/pages/HeliSkiing";
import ChardhamYatraByHelicopter from "./assets/pages/ChardhamyatraByHelicopter";
import DoDhamYatraByHelicopter from "./assets/pages/Dodhamyatra";
import SameDayKedarnathBadrinath from "./assets/pages/SameDayKedarnathBadrinath";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true); // ✅ Show popup 1 second after page load
    }, 1000);

    return () => clearTimeout(timer); // ✅ Cleanup function
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* ✅ Query Popup - Brightness Effect Applied */}
      {showPopup && <QueryPopup onClose={handlePopupClose} />}
      <div
        className={`min-h-screen transition-all duration-300 ease-in-out ${
          showPopup ? "brightness-80" : "brightness-100"
        }`}
      >
        {/* <Navbar /> */}
        <HeroSection />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutSection />
                <ServicesSection />
                <ChardhamPackages />
                <FleetSection />
                <AirChardhamSection />
                <HotelsSection />
                <HelicopterSeats />
                <Testimonial />
                <FAQSection />
              </>
            }
          />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/safety-rules" element={<SafetyRules />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          <Route path="/air-aimbulance" element={<AirAmbulance />} />
          <Route path="/air-shooting" element={<AirShooting />} />
          <Route path="/air-wedding" element={<AirWedding />} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/goverment-survey" element={<GovernmentSurveys />} />
          <Route path="/heli-skiing" element={<HeliSkiing />} />
          <Route path="/political-flying" element={<PoliticalFlying/>} />

          <Route path ="/chardham" element={<ChardhamYatraByHelicopter/>} />
          <Route path ="/dodham" element={<DoDhamYatraByHelicopter/>} />
          <Route path ="/sameday-kedarnath" element={<SameDayKedarnathBadrinath/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
