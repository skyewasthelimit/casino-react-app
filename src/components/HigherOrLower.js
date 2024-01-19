import React, { useState }  from "react";
import Casino from "../App";


function HigherOrLower({ money }) {

const [computerHand, setComputerHand] = useState(0);
const [playerHand, setPlayerHand] = useState(0);


const playHigherOrLower = () => {
  const computerHand = Math.floor(Math.random() * 101);
  const playerHand = Math.floor(Math.random() * 101)
  setComputerHand(computerHand);
  setPlayerHand(playerHand);
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  playHigherOrLower();
};

    return(
        <div className='game-room-wrapper'>
        <div className='games-room-higherlower'>
          <p className='game-text'>Higher or Lower</p>
          <p className="results-text"></p>
          <div className='higherlower-wrapper'>
            <p className='hand-text'>Computer</p>
            <div className='computer-hand'>{computerHand}</div>
            <div className='player-hand'>{playerHand}</div>
            <p className='hand-text'>Player</p>
          </div>
          <div className='bet-wrapper'>
            <form label="bet" onSubmit={handleFormSubmit}>
            <input className="bet" type="number" min="1" placeholder="$    BET AMOUNT" required></input>
            <input type="submit" value="PLAY" className="placebet"></input>
            </form>
          </div>
        </div>
        <div className="outcome-higherlower">
          <p className='outcome-higherlower-text'></p>
        </div>
      </div>
    )
};

export default HigherOrLower;