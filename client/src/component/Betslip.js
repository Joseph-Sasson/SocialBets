import React from 'react';
import "../css/betslip.css"

function Betslip({betslip}){

  // console.log(betslip)

  return (
    <div className="card">
      <div>{betslip.bet.sports_title}</div>
      <div>{betslip.bet.date}</div>
      <div>{betslip.bet.home_team}&ensp;{betslip.bet.home_odds}</div>
      <div>Wager: ${parseInt(betslip.wager)}&emsp;To Win:${parseInt(betslip.winnings)}</div>
      <div>Total Return: ${parseInt(betslip.wager) + parseInt(betslip.winnings)}</div>
      {<div>Result:&ensp;{betslip.winner ? "WIN" : "PENDING"}</div>}
      <div>Placed: {betslip.created_at}</div>
    </div>
  )
}

export default Betslip