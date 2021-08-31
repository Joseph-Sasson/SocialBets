import React, {useState, useEffect} from 'react';
import "../css/betslip.css"

function Betslip(){
  const [betslip, setBetslip] = useState([])

  useEffect(()=>{
    fetch("/betslips")
    .then((res)=>res.json())
    .then(data=>setBetslip(data.odds))
  },[])

  return (
    <div className="row">
      <div className="card">
        {betslip}
      </div>
    </div>
  )
}

export default Betslip