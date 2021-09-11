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

  const toggleActive = () => {
    setActive(!active)

  }

  return (
    <div>
      <br/>
        <div className = 'button'>
          <button className = 'active-button' onClick = {toggleActive}>{active ? 'Active Bets' : 'Settled Bets'}</button>
        </div>
          {active ?
            <div className="row">
              {betslips.filter(betslip=>betslip.user.id === user.id)
              .filter(bet=>bet.winner === null)
                .map(betslip=>{return <Betslip key={betslip.id} betslip={betslip}/>})}
            </div> : 
            <div className="row">
              {betslips.filter(betslip=>betslip.user.id === user.id)
              .filter(bet=>bet.winner === true || bet.winner === false)
                .map(betslip=>{return <Betslip key={betslip.id} betslip={betslip}/>})}
      </div>}
    </div>
  )
}

export default MyBets