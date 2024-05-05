import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import './App.css';

import About from '../Component/About';
import Navbar from '../Component/Navbar';
import Home from '../Component/Home';


function App() {
  return (
   
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path = "/Home" element = {<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

  );
}

export default App;
