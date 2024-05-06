// App.js
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Slideshow from './components/Slideshow/Slideshow'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Card />} />
          <Route path="/slideshow" element={<Slideshow />} /> 
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
