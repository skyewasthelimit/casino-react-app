import React from "react";

function HigherOrLower() {
    return(
        <div className='game-room-wrapper'>
        {/* Higher or Lower */}
        <div className='game-room-higherlower'>
          <p className='game-text'>Higher or Lower</p>
          <div className='higherlower-wrapper'>
            <p className='hand-text'>Computer</p>
            <div className='computer-hand'>0</div>
            <div className='player-hand'>0</div>
            <p className='hand-text'>Player</p>
          </div>
          <div className='bet-wrapper'>
            <input className="bet" type="number" placeholder="$    BET AMOUNT" required></input>
            <button className='play-btn-higherlower'>Play</button>
          </div>
        </div>
        <div className="outcome-higherlower">
          <p className='outcome-higherlower-text'></p>
        </div>
      </div>
    )
}

export default HigherOrLower;