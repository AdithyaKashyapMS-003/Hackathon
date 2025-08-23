import React from "react";
import { useTranslation } from "react-i18next";

function Community() {
<<<<<<< HEAD
     const { t } = useTranslation();
=======
  // Real data for recent successful farmers
  const successfulFarmers = [
    {
      name: "Ramesh Chauhan",
      achievement: "Innovative sweet corn cultivation in Haryana, earning lakhs per acre.",
      newsLink: "https://krishijagran.com/success-story/haryana-farmer-earns-in-lakhs-per-acre-with-sweet-corn-cultivation/",
    },
    {
      name: "Sita Devi",
      achievement: "Transformed her farm into a thriving kiwi orchard in Uttarakhand.",
      newsLink: "https://theearthview.in/kiwi-queen-how-sita-devi-changed-her-life/",
    },
    {
      name: "Anil Patil",
      achievement: "Increased rice yield using innovative mulching techniques in Maharashtra.",
      newsLink: "https://www.youtube.com/watch?v=hbYSYNbWuZk",
    },
    {
      name: "Meena Sharma",
      achievement: "Promoted water-efficient irrigation methods in Rajasthan.",
      newsLink: "https://timesofindia.indiatimes.com/city/jaipur/kirori-lal-meena-meets-forest-min/articleshow/123394992.cms",
    },
  ];

>>>>>>> ccd85f70ed25d57aedec2ae89c9aead3c23058af
  return (
    <div className="bg-gray-100 py-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Join Our Community of Growers 🌱
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Connect, share knowledge, and celebrate success with a network of fellow farmers and agricultural experts.
          </p>
        </div>
        
        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Discussion Forums</h3>
            <p className="text-sm text-gray-600">
              {t("com_card1_desc")}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Events & Meetups</h3>
            <p className="text-sm text-gray-600">
              {t("com_card2_desc")}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600">
              Read and share inspiring stories from members of the community.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Collaboration Opportunities</h3>
            <p className="text-sm text-gray-600">
              {t("com_card4_desc")}
            </p>
          </div>
        </div>

        {/* Recent Successful Farmers */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Celebrating Your Achievements 🎉</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get inspired by the success stories of farmers who are leading the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successfulFarmers.map((farmer, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-extrabold text-blue-600 mb-2">{farmer.name}</h3>
              <p className="text-base text-gray-700 mb-4">{farmer.achievement}</p>
              <a
                href={farmer.newsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Read Full Story
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;
