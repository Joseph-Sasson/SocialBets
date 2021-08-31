import React from 'react';
import "../css/bets.css"

function Bets({bet, home, away}){

  return (
    <div className="card">
      <div>{bet.sport_title}</div>
      <div>{bet.date}</div>
      <button onClick={()=>home(bet)}>{bet.home_team}<br/>{bet.home_odds}</button>
      <button onClick={()=>away(bet)}>{bet.away_team}<br/>{bet.away_odds}</button>
    </div>
  )
}

export default Bets