import React, {useState, useEffect} from 'react';
import Bets from './Bets';

function Home({home, away, user, setUser}){
  const [bets, setBets] = useState([])

  useEffect(()=>{
    fetch("/bets")
    .then((res)=>res.json())
    .then(data=>setBets(data))
  },[])

  return (
    <div>
      <div className='bet-head'>
        <h2 className = 'bet-header'>Available Bets </h2>
      </div>
        <div className="row">
        {bets.map(bet=> {return <Bets key={bet.id} bet={bet} home={home} away={away} user={user} setUser={setUser} />})}
        </div>
    </div>
  )
}

export default Home

