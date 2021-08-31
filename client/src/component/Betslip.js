import React from 'react';
import "../css/betslip.css"

function Betslip({betslip}){

  console.log(betslip)

  return (
    <div className="card">
      <div>{betslip.bet.sports_title}</div>
      <div>{betslip.bet.date}</div>
      <div>{betslip.bet.home_team}&ensp;{betslip.bet.home_odds}</div>
      <div>Wager: ${betslip.wager}&emsp;To Win:${betslip.winnings}</div>
      {<div>Result:&ensp;{betslip.winner ? "WIN" : "LOSS"}</div>}
    </div>
  )
}

export default Betslip