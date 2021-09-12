import React, {useState, useEffect} from 'react';
import "../css/betslip.css"
import Betslip from './Betslip';

function MyBets({user}){
  const [betslips, setBetslips] = useState([])
  const [active, setActive] = useState(true)

  useEffect(()=>{
    fetch("/betslips")
    .then((res)=>res.json())
    .then(setBetslips)
  },[])

  return (
    <div>
      <br/>
        <div className = 'button'>
          <button className = 'active-button' onClick = {()=>setActive(!active)}>{active ? 'Active Bets' : 'Settled Bets'}</button>
        </div>
        <div className="row">
          {active ?
              betslips.filter(betslip=>betslip.user.id === user.id)
              .filter(bet=>bet.winner === null)
                .map(betslip=>{return <Betslip key={betslip.id} betslip={betslip}/>})
            : 
              betslips.filter(betslip=>betslip.user.id === user.id)
              .filter(bet=>bet.winner === true || bet.winner === false)
                .map(betslip=>{return <Betslip key={betslip.id} betslip={betslip}/>})}
        </div>
    </div>
  )
}

export default MyBets