import React, { useState } from 'react';


const Header = () => {

const [money, setMoney] = useState(1000);              


  return (
    <div className="main">
      <div className="casino-wrapper">
        <a className="title-link" href="/"><div className='title'>🎰 Casino App 🎰</div></a>
        <div className='games'>
          <label htmlFor="selectOption">Choose a game:</label>
          <a href="/HigherOrLower"><button className='Game-1'>Higher or Lower</button></a>
          <a href="/Roulette"><button className='Game-2'>Roulette</button></a>
          <div className="chips">${money}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;




