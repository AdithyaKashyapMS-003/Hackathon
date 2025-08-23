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


import React, { useMemo } from "react";
import { useTranslation } from "react-i18next"; // 1. Import hooks

function Weather() {
  const { t } = useTranslation(); // 2. Initialize hook

  // 3. Define data arrays inside useMemo to ensure translations are loaded
  const weatherSources = useMemo(
    () => [
      {
        name: t("weather_source1_name"),
        desc: t("weather_source1_desc"),
        link: "https://www.youtube.com/watch?v=VAD2Vpm2AoM",
      },
      {
        name: t("weather_source2_name"),
        desc: t("weather_source2_desc"),
        link: "https://www.youtube.com/watch?v=fc9NcfJNFlY",
      },
      {
        name: t("weather_source3_name"),
        desc: t("weather_source3_desc"),
        link: "https://www.youtube.com/watch?v=dCQoHJ5l2aE",
      },
      {
        name: t("weather_source4_name"),
        desc: t("weather_source4_desc"),
        link: "https://www.accuweather.com/en/in/india-weather",
      },
    ],
    [t]
  );

  const weatherNews = useMemo(
    () => [
      {
        title: t("weather_news1_title"),
        source: t("weather_news1_source"),
        link: "https://timesofindia.indiatimes.com/topic/weather",
      },
      {
        title: t("weather_news2_title"),
        source: t("weather_news2_source"),
        link: "https://www.hindustantimes.com/india-news",
      },
      {
        title: t("weather_news3_title"),
        source: t("weather_news3_source"),
        link: "https://www.bbc.com/weather",
      },
      {
        title: t("weather_news4_title"),
        source: t("weather_news4_source"),
        link: "https://www.thehindu.com/news/national/",
      },
    ],
    [t]
  );

  return (
    <div className="bg-gray-100 py-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Weather Broadcasts Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("weather_broadcast_title")}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t("weather_broadcast_desc")}
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
                {t("weather_watch_live_button")}
              </a>
            </div>
          ))}
        </div>

        {/* Weather News Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("weather_news_title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t("weather_news_desc")}
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
              <p className="text-sm text-gray-500 mb-4">
                {t("weather_source_label")} {news.source}
              </p>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold py-2 px-5 rounded-xl hover:bg-green-600 transition-colors"
              >
                {t("weather_read_article_button")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;