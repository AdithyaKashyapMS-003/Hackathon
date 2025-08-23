import React from "react";

function Help() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
            Help and support
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Welcome to AgriGrow's Help Center. Here you’ll find answers to common questions and resources to get the most out of our platform.
          </p>
        </div>

        <div className="space-y-16">
          {/* Section: Frequently Asked Questions */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Frequently asked questions
            </h2>
            <dl className="divide-y divide-gray-200">
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  How do I find solutions for my crops?
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  Use the Solutions page to explore smart irrigation, crop monitoring, and more.
                </dd>
              </div>
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  How can I check the latest market prices?
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  Visit the Market Prices section for real-time mandi prices and trends.
                </dd>
              </div>
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  Where can I get weather updates?
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  The Weather Updates card on the home page provides instant access to local weather information.
                </dd>
              </div>
              <div className="py-6">
                <dt className="text-lg font-medium text-gray-800 leading-relaxed">
                  How do I connect with other farmers?
                </dt>
                <dd className="mt-2 text-base text-gray-600 leading-relaxed">
                  Join our Community page to participate in forums and share experiences.
                </dd>
              </div>
            </dl>
          </div>

          {/* Section: Getting Started */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Getting started
            </h2>
            <ol className="list-decimal list-outside text-lg text-gray-600 space-y-4 leading-relaxed">
              <li>Sign up or log in to your AgriGrow account.</li>
              <li>Navigate through the menu to explore solutions, guides, and community features.</li>
              <li>Use the search bar to quickly find topics or solutions relevant to your needs.</li>
              <li>Join discussions and ask questions in the Community section.</li>
            </ol>
          </div>

          {/* Section: Contact Support */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Contact support
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you need further assistance, our support team is here to help.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Email: <a href="mailto:support@agrigrow.com" className="text-blue-600 underline">support@agrigrow.com</a>
              <br />
              Community Forum: Get help from fellow farmers and AgriGrow experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;