import React from 'react';
import { useState } from 'react';
import { DocumentMagnifyingGlassIcon} from '@heroicons/react/24/solid'

// Add this line to declare React namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const accommodationTypes = [
    'Rooms',
    'Mansion',
    'Countryside',
    'Beachfront',
    'Mountain',
    'City Center',
    'Historical',
    'Luxury',
    'Pet Friendly'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">ALX Listings</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-1 flex items-center">
              <form onSubmit={handleSearch} className="w-full max-w-md">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DocumentMagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search locations, properties, or experiences"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>

            {/* Accommodation Types */}
            <div className="ml-6 flex space-x-4">
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Types
                <svg
                  className="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {accommodationTypes.map((type) => (
                      <a
                        key={type}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {type}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center">
            <button
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 mr-4"
            >
              Sign in
            </button>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;