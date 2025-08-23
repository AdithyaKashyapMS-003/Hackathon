import React, { useState } from "react";

function Help() {
  const [submittedQuestions, setSubmittedQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setSubmittedQuestions([...submittedQuestions, newQuestion.trim()]);
      setNewQuestion("");
    }
  };

  return (
    <div className="bg-gray-100 py-24 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Help and Support 🤝
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our Help Center. Here you’ll find answers to common questions and resources to get the most out of our platform.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {/* Section: Frequently Asked Questions */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <dl className="divide-y divide-gray-200">
              <div className="py-4">
                <dt className="text-lg font-medium text-gray-800">
                  How do I find solutions for my crops?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Use the Solutions page to explore smart irrigation, crop monitoring, and more.
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-lg font-medium text-gray-800">
                  How can I check the latest market prices?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Visit the Market Prices section for real-time mandi prices and trends.
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-lg font-medium text-gray-800">
                  Where can I get weather updates?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  The Weather Updates card on the home page provides instant access to local weather information.
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-lg font-medium text-gray-800">
                  How do I connect with other farmers?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  Join our Community page to participate in forums and share experiences.
                </dd>
              </div>
            </dl>
          </div>

          {/* New Section: Ask a question and display submitted questions */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ask a question
            </h2>
            <form onSubmit={handleQuestionSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Type your question here..."
                className="flex-grow border-2 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </form>

            {submittedQuestions.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Your Questions</h3>
                <ul className="space-y-4">
                  {submittedQuestions.map((q, index) => (
                    <li key={index} className="bg-gray-50 p-4 rounded-xl text-gray-700 border border-gray-200">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section: Getting Started */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Getting started
            </h2>
            <ol className="list-decimal list-inside text-lg text-gray-600 space-y-4">
              <li>Sign up or log in to your AgriGrow account.</li>
              <li>Navigate through the menu to explore solutions, guides, and community features.</li>
              <li>Use the search bar to quickly find topics or solutions relevant to your needs.</li>
              <li>Join discussions and ask questions in the Community section.</li>
            </ol>
          </div>

          {/* Section: Contact Support */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact support
            </h2>
            <p className="text-lg text-gray-600">
              If you need further assistance, our support team is here to help.
            </p>
            <div className="mt-4 text-lg text-gray-700">
              <p>
                Email: <a href="mailto:support@agrigrow.com" className="text-blue-600 font-medium hover:underline">support@agrigrow.com</a>
              </p>
              <p>
                Community Forum: Get help from fellow farmers and AgriGrow experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
