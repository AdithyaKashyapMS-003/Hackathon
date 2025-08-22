import React from "react";

function Help() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-700">Help & Support</h1>
      <p className="text-lg mb-6">
        Welcome to AgriGrow’s Help Center! Here you’ll find answers to common questions, guidance on using our platform, and resources to help you get the most out of AgriGrow. Whether you’re a new user or a seasoned farmer, we’re here to support you every step of the way.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
        <ul className="list-disc ml-6 text-base text-gray-700 space-y-2">
          <li>
            <strong>How do I find solutions for my crops?</strong>
            <br />
            Use the <span className="font-semibold">Solutions</span> page to explore smart irrigation, crop monitoring, soil health management, and more. Each section provides detailed guidance and tips.
          </li>
          <li>
            <strong>How can I check the latest market prices?</strong>
            <br />
            Visit the <span className="font-semibold">Market Prices</span> section under <span className="font-semibold">Explore AgriGrow</span> on the home page for real-time mandi prices and trends.
          </li>
          <li>
            <strong>Where can I get weather updates?</strong>
            <br />
            The <span className="font-semibold">Weather Updates</span> card on the home page provides instant access to local weather information.
          </li>
          <li>
            <strong>How do I connect with other farmers?</strong>
            <br />
            Join our <span className="font-semibold">Community</span> page to participate in forums, share experiences, and learn from others.
          </li>
          <li>
            <strong>How do I access government schemes?</strong>
            <br />
            The <span className="font-semibold">Govt Schemes</span> section lists the latest subsidies, benefits, and eligibility criteria for farmers.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
        <ol className="list-decimal ml-6 text-base text-gray-700 space-y-2">
          <li>Sign up or log in to your AgriGrow account.</li>
          <li>Navigate through the menu to explore solutions, guides, and community features.</li>
          <li>Use the search bar to quickly find topics or solutions relevant to your needs.</li>
          <li>Join discussions and ask questions in the Community section.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Support</h2>
        <p className="mb-2">
          If you need further assistance, our support team is here to help!
        </p>
        <ul className="list-disc ml-6 text-base text-gray-700">
          <li>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:support@agrigrow.com" className="text-blue-600 underline">
              support@agrigrow.com
            </a>
          </li>
          <li>
            <span className="font-semibold">Community Forum:</span> Get help from fellow farmers and AgriGrow experts.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Tips for Best Experience</h2>
        <ul className="list-disc ml-6 text-base text-gray-700 space-y-2">
          <li>Keep your profile updated for personalized recommendations.</li>
          <li>Enable notifications to stay informed about the latest updates and weather alerts.</li>
          <li>Regularly check the Community page for new discussions and events.</li>
          <li>Explore the Guides section for step-by-step instructions on using AgriGrow features.</li>
        </ul>
      </section>
    </div>
  );
}

export default Help