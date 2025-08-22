import React from "react";

function Guides() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Guides</h1>
      <p className="text-lg mb-2">
        Explore our step-by-step guides to help you get the most out of AgriGrow.
      </p>
      <ul className="list-disc ml-6 text-base text-gray-700">
        <li>Getting Started with AgriGrow</li>
        <li>Best Practices for Sustainable Farming</li>
        <li>How to Join the Community</li>
      </ul>
    </div>
  );
}

export default Guides;