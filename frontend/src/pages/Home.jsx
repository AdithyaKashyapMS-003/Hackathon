import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Hero />
      <Explore />
    </div>
  );
}

export default Home;