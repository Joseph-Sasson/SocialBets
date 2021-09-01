import React from 'react';

function BetForm({handleSubmit, amount, pseudoBackend, winnings, bet, errors}){

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
          onChange={pseudoBackend}
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