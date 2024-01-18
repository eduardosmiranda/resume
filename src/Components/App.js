// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import Career from "./Career/Career";
import "../filesAndStyles/styles/styles.css";
import Contacts from './Contacts/Contacts';
import About from './About/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contacts" element= {<Contacts />} />
        <Route path="/aboutme" element = {<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
