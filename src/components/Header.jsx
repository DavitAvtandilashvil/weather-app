import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../translations';
import TemperatureToggle from './TemperatureConverter'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('en'); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
   
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false); 
  };

  return (
    <header className="flex justify-between items-center p-7 bg-gray-100">
      <div className="flex-1 pr-7 relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={translations[language].placeholder}
          className="w-[393px] h-[60px] pl-12 pr-4 rounded-[64px] bg-[#FF9500] text-white placeholder-black focus:outline-none focus:ring-0"
        />
      </div>
      <div className="relative flex-shrink-0 pl-7">
        <button
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              
              if (!document.querySelector('.dropdown-menu:hover')) {
                setDropdownOpen(false);
              }
            }, 100);
          }}
        >
          <FontAwesomeIcon icon={faGlobe} size="lg" className="mr-4" />
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu absolute top-full right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li>
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleLanguageChange('ka')}
                >
                  Georgian
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <TemperatureToggle />
    </header>
  );
};

export default Header;
