import React from "react";
import { Link } from "react-router-dom";


function Explore() {
    const features = [
        { title: "Farmer Financial Health DashBoard", desc: "Tips and solutions for crop issues.", bg: "bg-green-100", link: "/dashboard" },
        { title: "Market Prices", desc: "Stay updated on mandi prices.", bg: "bg-yellow-100", link: "/market-prices" },
        { title: "Weather Updates", desc: "Get real-time weather info.", bg: "bg-blue-100" },
        { title: "Govt Schemes", desc: "Know about subsidies and benefits.", bg: "bg-purple-100" },
        { title: "Community", desc: "Ask & learn from fellow farmers.", bg: "bg-red-100", link: "/community" },
    ];

    return (
        <section className="px-10 py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore AgriGrow</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {features.map((item, index) => (
                    <Link
                        to={item.link}
                        key={index}
                        className={`${item.bg} p-6 rounded-xl shadow hover:shadow-lg transition block`}
                    >
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Explore;
