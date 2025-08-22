import React from "react";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Farming Made Simple
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          One place for all your farming problems
        </h2>
        <p className="text-gray-600 text-lg">
          AgriGrow helps farmers find solutions for crop health, market prices, and weather updates — all in one place. No complex terms, just simple and useful guidance.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
          alt="Farmer illustration"
          className="w-80"
        />
      </div>
    </section>
  );
}
export default Hero;