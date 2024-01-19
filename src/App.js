import './App.css';
import React from 'react';
import Header from './components/Header';
import HigherOrLower from './components/HigherOrLower';
import Roulette from './components/Roulette'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Casino() {

  return (<Router>
<Header />
    <div className='game-render'>
      <Routes>
        <Route path="/HigherOrLower" element={<HigherOrLower />} />
        <Route path="/Roulette" element={<Roulette />} />
      </Routes>
      </div>
  </Router>
  );
}

export default Casino;
