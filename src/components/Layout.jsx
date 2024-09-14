import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import backgroundImage from '../assets/images/backgrond.png';

const Layout = () => {
  const handleLanguageChange = () => {
    console.log('Language change function called');
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-no-repeat h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lg:max-w-[1440px] lg:mx-auto">
        <Header onLanguageChange={handleLanguageChange} />
        <main className="flex-1 p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;