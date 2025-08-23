// import React from "react";
// import { Link } from "react-router-dom";

// function Explore() {
//   const features = [
//     {
//       title: "Farmer Financial Health Dashboard",
//       desc: "Get a complete overview of your farm's income, expenses, and profit.",
//       link: "/dashboard",
//       bg: "bg-green-100",
//       hover: "hover:bg-green-200",
//     },
//     {
//       title: "AI Chat Bot",
//       desc: "Interact with AI to get personalized farming advice instantly.",
//       link: "/ai-chat",
//       bg: "bg-green-100",
//       hover: "hover:bg-green-200",
//     },
//     {
//       title: "Weather Updates",
//       desc: "Get real-time, hyper-local weather information to plan your day.",
//       link: "/weather",
//       bg: "bg-green-100",
//       hover: "hover:bg-green-200",
//     },
//     {
//       title: "Market Place",
//       desc: "A Marketplace for farmers to rent and use products.",
//       link: "/market-place",
//       bg: "bg-green-100",
//       hover: "hover:bg-green-200",
//     },
//     {
//       title: "Community",
//       desc: "Ask and learn from a network of fellow farmers and experts.",
//       link: "/community",
//       bg: "bg-green-100",
//       hover: "hover:bg-green-200",
//     },
//   ];

//   return (
//     <section className="relative py-16 sm:py-24 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {/* Gradient Layer */}
//         <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-white"></div>

//         {/* Wavy Animated Grass */}
//         <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
//           <svg
//             className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-70"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="#86efac"
//               fillOpacity="0.6"
//               d="M0,256L40,245.3C80,235,160,213,240,202.7C320,192,400,192,480,197.3C560,203,640,213,720,224C800,235,880,245,960,229.3C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,320L0,320Z"
//             ></path>
//           </svg>
//           <svg
//             className="absolute bottom-0 w-[200%] h-full animate-wave-fast opacity-60"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="#4ade80"
//               fillOpacity="0.5"
//               d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,165.3C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Title */}
//         <div className="mb-12">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
//             Explore AgriGrow
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover the tools that simplify your farming journey.
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {features.map((item, index) => (
//             <Link
//               to={item.link}
//               key={index}
//               className={`group block p-6 rounded-2xl shadow-md ${item.bg} ${item.hover} transition transform hover:-translate-y-1 hover:shadow-xl text-left`}
//             >
//               <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-900 transition">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
//               <span className="mt-4 inline-block text-green-900 font-medium group-hover:underline">
//                 Learn more →
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Tailwind CSS Animations */}
//       <style>
//         {`
//           @keyframes wave-slow {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           @keyframes wave-fast {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-wave-slow { animation: wave-slow 20s linear infinite; }
//           .animate-wave-fast { animation: wave-fast 10s linear infinite; }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Explore;
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Explore() {
  const features = [
    {
      title: "Farmer Financial Health Dashboard",
      desc: "Get a complete overview of your farm's income, expenses, and profit.",
      link: "/dashboard",
      bg: "bg-green-100",
      hover: "hover:bg-green-200",
    },
    {
      title: "AI Chat Bot",
      desc: "Interact with AI to get personalized farming advice instantly.",
      link: "/ai-chat",
      bg: "bg-green-100",
      hover: "hover:bg-green-200",
    },
    {
      title: "Weather Updates",
      desc: "Get real-time, hyper-local weather information to plan your day.",
      link: "/weather",
      bg: "bg-green-100",
      hover: "hover:bg-green-200",
    },
    {
      title: "Market Place",
      desc: "Explore government subsidies, benefits, and eligibility criteria.",
      link: "/market-place",
      bg: "bg-green-100",
      hover: "hover:bg-green-200",
    },
    {
      title: "Community",
      desc: "Ask and learn from a network of fellow farmers and experts.",
      link: "/community",
      bg: "bg-green-100",
      hover: "hover:bg-green-200",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-white"></div>

        {/* Wavy animated grass */}
        <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
          <svg
            className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-70"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#86efac"
              fillOpacity="0.6"
              d="M0,256L40,245.3C80,235,160,213,240,202.7C320,192,400,192,480,197.3C560,203,640,213,720,224C800,235,880,245,960,229.3C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 w-[200%] h-full animate-wave-fast opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4ade80"
              fillOpacity="0.5"
              d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,165.3C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Hero Title */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          The smart farming assistant
          <br /> you never had 🌱
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          AgriGrow does the hard work for you, so you can focus on growing your
          business.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {features.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`group ${item.bg} ${item.hover} rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 text-left`}
          >
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-900 transition">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-700">{item.desc}</p>
            <span className="mt-4 inline-block text-green-900 font-medium group-hover:underline">
              Learn more →
            </span>
          </Link>
        ))}
      </div>

      {/* Tailwind CSS Animations */}
      <style>
        {`
          @keyframes wave-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes wave-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-wave-slow { animation: wave-slow 20s linear infinite; }
          .animate-wave-fast { animation: wave-fast 10s linear infinite; }
        `}
      </style>
    </section>
  );
};

export default Explore;
