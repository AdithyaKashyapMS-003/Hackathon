import React from "react";

function Community() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            The AgriGrow Community
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Connect, learn, and grow with a network of like-minded agricultural professionals and enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Discussion Forums</h3>
            <p className="text-sm text-gray-600">
              Engage in conversations, get answers, and learn from experts and peers.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Events & Meetups</h3>
            <p className="text-sm text-gray-600">
              Participate in online and local events to expand your network.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600">
              Read and share inspiring stories from members of the AgriGrow community.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Collaboration Opportunities</h3>
            <p className="text-sm text-gray-600">
              Find partners and collaborate on projects to achieve shared goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;