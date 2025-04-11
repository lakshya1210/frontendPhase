import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="pt-24 pb-16 text-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-6xl font-extrabold mb-3">
          Build Your Resume <span className="text-blue-600">With AI</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Effortlessly Craft a Professional Resume with Our AI-Powered Builder
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/sign-up" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition font-semibold">
            Get Started
          </Link>
          <button className="bg-gray-200 text-gray-800 px-6 py-2.5 rounded-full hover:bg-gray-300 transition font-semibold">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;