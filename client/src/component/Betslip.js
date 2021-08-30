import React, {useState, useEffect} from 'react';
import Bets from './Bets';

function Betslip(){
  const [bets, setBets] = useState([])

  useEffect(()=>{
    fetch("/bets")
    .then((res)=>res.json())
    .then(data=>setBets(data.odds))
  },[])

  return (
    <div className="row">
      {bets.map(bet=> {return <Bets key={bet.id} bet={bet} />})}
    </div>
  )
}

export default Betslip