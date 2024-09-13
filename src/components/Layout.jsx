import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import backgroundImage from '../assets/images/backgrond.png';


const Layout = () => {
  const handleLanguageChange = () => {
    console.log('Language change function called');
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header onLanguageChange={handleLanguageChange} />
      <main className="flex-1 p-7">
        <Outlet />
      </main>
      <footer className="p-7 bg-gray-100">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
