import React, {useState, useEffect} from 'react';
import "../css/betslip.css"
import Betslip from './Betslip';

function MyBets({user}){
  const [betslips, setBetslips] = useState([])

  useEffect(()=>{
    fetch("/betslips")
    .then((res)=>res.json())
    .then(setBetslips)
  },[])

  return (
    <div>
      <h2 className = 'bet-header'>Active & Settled Bets</h2>
        <div className="row">
          {betslips.filter((betslip=>betslip.user.id === user.id))
          .map(betslip=>{return <Betslip key={betslip.id} betslip={betslip}/>})}
       </div>
    </div>
  )
}

export default MyBets