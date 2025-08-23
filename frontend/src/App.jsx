import React from "react";

import { useTranslation } from "react-i18next";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Guides from "./pages/Guides";
import Community from "./pages/Community";
import FarmerDashboard from "./pages/FarmerDashboard";
import MarketPlace from "./pages/MarketPlace";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import AiChat from "./pages/Ai-chat";
import RentalUpload from "./pages/RentalUpload";
import Rent from "./pages/rent";


function App() {
  // Initialize the translation hook
  const { t, i18n } = useTranslation();

  // Function to handle language changes
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col min-h-screen">
        <Routes>
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/community" element={<Community />} />
          <Route path="/dashboard" element={<FarmerDashboard />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ai-chat" element={<AiChat />} />
          <Route path="/marketplace/upload" element={<RentalUpload />} />
          <Route path="/marketplace/rent" element={<Rent />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}


export default App;

