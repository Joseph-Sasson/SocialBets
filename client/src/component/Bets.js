import React from 'react';
import "../css/bets.css"

function Bets({bet}){

  const addHomeToSlip =()=>{
    console.log(bet.home_team, bet.home_odds)
  }

  const addAwayToSlip =()=>{
    console.log(bet.away_team, bet.away_odds)
  }

  return (
    <div className="card">
      <div>{bet.sport_title}</div>
      <div>{bet.date}</div>
      <button onClick={addHomeToSlip}>{bet.home_team}<br/>{bet.home_odds}</button>
      <button onClick={addAwayToSlip}>{bet.away_team}<br/>{bet.away_odds}</button>
    </div>
  )
}

export default Bets