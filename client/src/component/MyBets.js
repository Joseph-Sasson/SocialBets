import React, {useState, useEffect} from 'react';
import "../css/betslip.css"
import Betslip from './Betslip';

function MyBets(){
  const [betslips, setBetslips] = useState([])

  useEffect(()=>{
    fetch("/betslips")
    .then((res)=>res.json())
    .then(setBetslips)
  },[])

  return (
    <div className="row">
      {betslips.map(betslip=>{return <Betslip key={betslip.id} betslip={betslip}/>})}
    </div>
  )
}

export default MyBets