import React from 'react';

function BetForm({handleSubmit, amount, homeAway, pseudoBackend, handleChoose, winnings, errors, bet}){

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, bet)}>
        <label>Wager:
        <input
          type="number"
          min="0"
          placeholder="Enter bet amount"
          name="wager"
          value={amount}
          onChange={homeAway ? pseudoBackend : handleChoose}
        /></label>
      </form>
      <form onSubmit={(e) => handleSubmit(e, bet)}>
        <label>To Win:</label>
        <span>{amount ? winnings : " "}</span>
      <br/>
      <input type='submit' />
      </form>
      <div>{errors}</div>
    </>
  )
}

export default BetForm