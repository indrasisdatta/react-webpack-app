import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto md:flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">React Webpack Demo</h1>
        </div>
        {/* Navigation Menu */}
        <nav className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
