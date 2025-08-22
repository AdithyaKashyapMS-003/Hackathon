import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "Guides", link: "/guides" },
    { name: "Community", link: "/community" },
    { name: "Help", link: "/help" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Market Prices", link: "/market-prices" },
  ];

  return (
    <nav className="flex justify-between items-center p-6 shadow-sm relative">
      {/* Logo with hover menu */}
      <div
        className="relative inline-block"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <span className="text-xl font-bold cursor-pointer">AgriGrow</span>
        {showMenu && (
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
            <ul className="py-2">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setShowMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Usual navbar links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-green-600 cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="/solutions" className="hover:text-green-600 cursor-pointer">Solutions</Link>
        </li>
        <li>
          <Link to="/guides" className="hover:text-green-600 cursor-pointer">Guides</Link>
        </li>
        <li>
          <Link to="/community" className="hover:text-green-600 cursor-pointer">Community</Link>
        </li>
        <li>
          <Link to="/help" className="hover:text-green-600 cursor-pointer">Help</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;