import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
  const [city, setCity] = useState('Tbilisi');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout setCity={setCity} />}>
          <Route index element={<Home city={city} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
