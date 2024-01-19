import React, { useState } from 'react';

const Roulette = () => {
  const [rouletteOutcome, setRouletteOutcome] = useState([0, '']);

  const rouletteOutcomes = [
    { number: '0', color: 'green' },
    { number: '32', color: 'red' },
    { number: '15', color: 'black' },
    { number: '19', color: 'red' },
    { number: '4', color: 'black' },
    { number: '21', color: 'red' },
    { number: '2', color: 'black' },
    { number: '25', color: 'red' },
    { number: '17', color: 'black' },
    { number: '34', color: 'red' },
    { number: '6', color: 'black' },
    { number: '27', color: 'red' },
    { number: '13', color: 'black' },
    { number: '36', color: 'red' },
    { number: '11', color: 'black' },
    { number: '30', color: 'red' },
    { number: '8', color: 'black' },
    { number: '23', color: 'red' },
    { number: '10', color: 'black' },
    { number: '5', color: 'red' },
    { number: '24', color: 'black' },
    { number: '16', color: 'red' },
    { number: '33', color: 'black' },
    { number: '1', color: 'red' },
    { number: '20', color: 'black' },
    { number: '14', color: 'red' },
    { number: '31', color: 'black' },
    { number: '9', color: 'red' },
    { number: '22', color: 'black' },
    { number: '18', color: 'red' },
    { number: '29', color: 'black' },
    { number: '7', color: 'red' },
    { number: '28', color: 'black' },
    { number: '12', color: 'red' },
    { number: '35', color: 'black' },
    { number: '3', color: 'red' },
    { number: '26', color: 'black' }
  ];
  
  const playRoulette = () => {
    const rouletteOutcome = Math.floor(Math.random() * rouletteOutcomes.length);
    setRouletteOutcome(rouletteOutcome);
  }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      playRoulette();
    };

  return (
    <div>
      <div className='game-room-wrapper'>
        <div className='games-room-roulette'>
        <p className='game-text'>Roulette</p>
          <div className='roulette-wrapper'>
            <div className='roulette'>
              <div className='roulette-number'>{rouletteOutcome}</div>
            </div>
          </div>
          <div className='bet-wrapper'>
            <form label="bet" onSubmit={handleFormSubmit}>
              <input className="bet" type="number" min="1" placeholder="$    BET AMOUNT" required></input>
              <input className="bet" type="number" min="0" max="36" placeholder="NUMBER 0 - 36" required></input>
              <input className="bet" type="text" placeholder="COLOR" required></input>
              <input type="submit" value="PLAY" className="placebet"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roulette;
