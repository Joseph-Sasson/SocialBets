import React from 'react';
import "../css/betslip.css"

function Betslip({betslip}){

  const RenderResults = ()=>{
  if (betslip.winner === true){
    return "WIN"
  } else if (betslip.winner === false){
    return "LOSS"
  } else {
    return "PENDING"
  }}

  return (
    <div className="card">
      <div>{betslip.bet.sports_title}</div>
      <div>{betslip.bet.date}</div>
      <div><span>{betslip.odds === 'home' ? betslip.bet.home_team : betslip.bet.away_team }</span>&ensp;<span>{betslip.odds === 'home' ? betslip.bet.home_odds : betslip.bet.away_odds }</span></div>
      <div>Wager: ${parseInt(betslip.wager)}&emsp;To Win:${parseInt(betslip.winnings)}</div>
      <div>Total Return: ${parseInt(betslip.wager) + parseInt(betslip.winnings)}</div>
      {<div>Result:&ensp;{RenderResults()}</div>}
      <div>Placed On: {betslip.bet_time}</div>
    </div>
  )
}

export default Betslip