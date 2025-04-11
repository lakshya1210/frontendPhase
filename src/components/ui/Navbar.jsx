import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm py-4 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
            RA
          </div>
          <span className="font-bold text-xl">ResumeAI</span>
        </div>
        <div className="space-x-4">
          <button className="font-semibold text-gray-600 hover:text-gray-900">Log in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;