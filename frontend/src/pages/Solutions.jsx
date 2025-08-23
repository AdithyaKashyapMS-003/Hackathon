import React from "react";

function Solutions() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
            Our solutions for a sustainable future.
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We build simple, powerful tools that enable modern agriculture to thrive.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Solution 1 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-10 border-t border-gray-200 pt-8">
            <div className="flex-shrink-0 w-24 sm:w-28 text-center sm:text-left">
              <span className="text-6xl text-gray-300 font-extralight leading-none">01</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Smart Irrigation Systems
              </h3>
              <p className="text-lg text-gray-600">
                A simple and efficient way to manage your farm's water resources. Our systems are built to be intuitive, reliable, and cost-effective.
              </p>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-10 border-t border-gray-200 pt-8">
            <div className="flex-shrink-0 w-24 sm:w-28 text-center sm:text-left">
              <span className="text-6xl text-gray-300 font-extralight leading-none">02</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Crop Monitoring & Analytics
              </h3>
              <p className="text-lg text-gray-600">
                Understand your crops better. Our analytics platform provides real-time data to help you make informed decisions without the complexity.
              </p>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-10 border-t border-gray-200 pt-8">
            <div className="flex-shrink-0 w-24 sm:w-28 text-center sm:text-left">
              <span className="text-6xl text-gray-300 font-extralight leading-none">03</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Soil Health Management
              </h3>
              <p className="text-lg text-gray-600">
                Simple tools to analyze and maintain the health of your soil, ensuring long-term productivity and resilience.
              </p>
            </div>
          </div>

          {/* Solution 4 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-10 border-t border-gray-200 pt-8">
            <div className="flex-shrink-0 w-24 sm:w-28 text-center sm:text-left">
              <span className="text-6xl text-gray-300 font-extralight leading-none">04</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Market Access & Insights
              </h3>
              <p className="text-lg text-gray-600">
                Connect directly with markets and get clear, concise insights. No jargon, just the information you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;