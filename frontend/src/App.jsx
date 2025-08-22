import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Guides from "./pages/Guides";
import Community from "./pages/Community";
import FarmerDashboard from "./pages/FarmerDashboard";
import MarketPrices from "./pages/MarketPlace";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
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
            <Route path="/market-prices" element={<MarketPrices />} />
            <Route path="/signup" element={<SignUp />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;