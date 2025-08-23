// import React from "react";

// function Weather() {
//   // Example live weather sources (you can replace/add more)
//   const weatherSources = [
//     {
//       name: "India Weather Live",
//       desc: "24/7 live weather updates across India.",
//       link: "https://www.youtube.com/watch?v=VAD2Vpm2AoM", // Example YouTube live channel
//     },
//     {
//       name: "BBC Weather",
//       desc: "Global forecasts and weather analysis.",
//       link: "https://www.youtube.com/watch?v=fc9NcfJNFlY",
//     },
//     {
//       name: "NDTV Weather",
//       desc: "Daily updates on Indian monsoon, rainfall, and climate.",
//       link: "https://www.youtube.com/watch?v=dCQoHJ5l2aE",
//     },
//     {
//       name: "AccuWeather News",
//       desc: "Breaking weather news and severe storm alerts.",
//       link: "https://www.accuweather.com/en/in/india-weather",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-24 font-sans antialiased">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
//             🌦 Live Weather Broadcasts
//           </h1>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Stay updated with live weather channels, forecasts, and breaking news on climate.
//           </p>
//         </div>

//         {/* Weather Sources */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {weatherSources.map((source, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition transform duration-300 hover:scale-105"
//             >
//               <h3 className="text-xl font-extrabold text-blue-600 mb-2">{source.name}</h3>
//               <p className="text-base text-gray-700 mb-4">{source.desc}</p>
//               <a
//                 href={source.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors"
//               >
//                 Watch Live
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Weather;


import React from "react";

function Weather() {
  // Example live weather sources (replace/add more as needed)
  const weatherSources = [
    {
      name: "India Weather Live",
      desc: "24/7 live weather updates across India.",
      link: "https://www.youtube.com/watch?v=VAD2Vpm2AoM",
    },
    {
      name: "FOX News Weather",
      desc: "Global forecasts and weather analysis.",
      link: "https://www.youtube.com/watch?v=fc9NcfJNFlY",
    },
    {
      name: "NDTV Weather",
      desc: "Daily updates on Indian monsoon, rainfall, and climate.",
      link: "https://www.youtube.com/watch?v=dCQoHJ5l2aE",
    },
    {
      name: "AccuWeather News",
      desc: "Breaking weather news and severe storm alerts.",
      link: "https://www.accuweather.com/en/in/india-weather",
    },
  ];

  // Example weather news (replace with API later if needed)
  const weatherNews = [
    {
      title: "Heavy rains expected in Southern India this week",
      source: "Times of India",
      link: "https://timesofindia.indiatimes.com/topic/weather",
    },
    {
      title: "IMD issues red alert for Mumbai, severe thunderstorms likely",
      source: "Hindustan Times",
      link: "https://www.hindustantimes.com/india-news",
    },
    {
      title: "Climate change fueling extreme heat across Asia",
      source: "BBC News",
      link: "https://www.bbc.com/weather",
    },
    {
      title: "Monsoon tracker: Key updates on rainfall patterns",
      source: "The Hindu",
      link: "https://www.thehindu.com/news/national/",
    },
  ];

  return (
    <div className="bg-gray-100 py-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Weather Broadcasts Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            🌦 Live Weather Broadcasts
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with live weather channels, forecasts, and breaking news on climate.
          </p>
        </div>

        {/* Weather Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {weatherSources.map((source, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-extrabold text-blue-600 mb-2">
                {source.name}
              </h3>
              <p className="text-base text-gray-700 mb-4">{source.desc}</p>
              <a
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Watch Live
              </a>
            </div>
          ))}
        </div>

        {/* Weather News Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            📰 Latest Weather News
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest updates, articles, and reports on changing weather conditions.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weatherNews.map((news, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition transform duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {news.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">Source: {news.source}</p>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold py-2 px-5 rounded-xl hover:bg-green-600 transition-colors"
              >
                Read Full Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;