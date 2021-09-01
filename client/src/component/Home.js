import React, {useState, useEffect} from 'react';
import Bets from './Bets';

function Home({home, away}){
  const [bets, setBets] = useState([])

  useEffect(()=>{
    fetch("/bets")
    .then((res)=>res.json())
    .then(data=>setBets(data))
  },[])

  return (
    <div className="row">
      {bets.map(bet=> {return <Bets key={bet.id} bet={bet} home={home} away={away} />})}
    </div>
  )
}

export default Home

