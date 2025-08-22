import React from "react";

function Community() {
  return (
    <div className="flex-1 w-full flex flex-col min-h-screen ">
      <h1 className="text-3xl font-bold mb-4">Community</h1>
      <p className="text-lg mb-2">
        Connect with fellow farmers, share experiences, and grow together with AgriGrow's vibrant community.
      </p>
      <ul className="list-disc ml-6 text-base text-gray-700">
        <li>Discussion Forums</li>
        <li>Events & Meetups</li>
        <li>Success Stories</li>
        <li>Collaboration Opportunities</li>
      </ul>
    </div>
  );
}

export default Community;