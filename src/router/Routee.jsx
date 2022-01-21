import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import ListProperty from '../pages/ListProperty';
import RentProperty from '../pages/RentProperty';
import Services from '../pages/Services';

export default function Routee() {
  return (
      <>
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/rentprop" element={<RentProperty />} />
                <Route path="/listprop" element={<ListProperty />} />
            </Routes>
          </Router>
      </>
  );
}
