import './App.css'
import React, { useState } from 'react';
import HigherOrLower from './HigherOrLower';

const GAME_COMPONENTS = {
  'higher-or-lower': <HigherOrLower />,
};

function Casino() {
  const [selectedGame, setSelectedGame] = useState(null);

  const gameSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedGame(selectedValue);
  }

  const SelectedGameComponent = GAME_COMPONENTS[selectedGame];

  return (
    <div className="main">
      <div className="casino-wrapper">
        <div className='title'>🎰 Casino App 🎰</div>
        <div className='games'>
          Choose a game:
          <select className="game-select" onChange={gameSelect} name="table">
          <option value="" selected></option>
            <option value="higher-or-lower">Higher or Lower</option>
          </select>
          <div className="chips">$1000</div>
        </div>
      </div>

      {SelectedGameComponent}

    </div>
  );
}

export default Casino;
