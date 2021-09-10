import React, {useState} from 'react';
import "../css/bets.css"
import BetForm from './BetForm';

function Bets({bet, user, setUser}){
  const [toggleForm, setToggleForm] = useState(false)
  const [homeAway, setHomeAway] = useState([])
  const [errors, setErrors] = useState([]);
  const [winnings, setWinnings] = useState('')
  const [amount, setAmount] = useState('')

  const handleClick = (e) =>{
    if (!user){
      alert("You must be logged in to place a bet!")
    }else{
    if (e.target.name === 'home' && homeAway !== 'home_odds') {
      setHomeAway("home_odds")
      setAmount('')
      if (toggleForm === false) {
        setToggleForm(true)
      }
    } else if ((e.target.name === 'away' && homeAway !== 'away_odds')) {
      setHomeAway("away_odds")
      setAmount('')
      if (toggleForm === false) {
        setToggleForm(true)
      }
    } else {
      setHomeAway('')
      setToggleForm(!toggleForm)
    }
  }}

  const pseudoBackend = async (e) => {
    setAmount(e.target.value)
    const newWinnings = (bet[homeAway] > 0 ? ((bet[homeAway] * parseInt(e.target.value))/100) : (((parseInt(e.target.value)*100)/bet[homeAway])* -1))
    setWinnings(newWinnings)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (homeAway === 'home_odds' || homeAway === 'away_odds'){
      if (window.confirm("Are you sure you want to place this bet?"))
      fetch(`/withdraw/${user.id}`,{
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({amount:parseInt(amount)})
        }).then((r) =>{
          if (r.ok) {
            r.json().then(setUser)
            fetch("/betslips",{
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({wager:parseInt(amount), winnings:winnings, bet_id:bet.id})
            }).then((r) =>{
              if (r.ok) {
                r.json().then(()=>alert("You placed a wager!"))
              } else {
                r.json().then((err) => alert(err.errors));
              }
            })
          } else {
            r.json().then((err) => alert(err.errors));
          }
        })
      }else{
        alert("You must choose a bet to wager!")
      }
  };

  return (
    <div className="card">
      <div>{bet.sports_title}</div>
      <div>{bet.date}</div>
      <button onClick={handleClick} name="home" style={homeAway === 'home_odds' ? {backgroundColor: "green"} : null}>{bet.home_team}<br/>{bet.home_odds}</button>
      <button onClick={handleClick} name="away" style={homeAway === 'away_odds' ? {backgroundColor: "green"} : null}>{bet.away_team}<br/>{bet.away_odds}</button>
      {toggleForm ? <BetForm handleSubmit={handleSubmit} amount={amount} errors={errors} pseudoBackend={pseudoBackend} winnings={winnings} bet={bet}/> : false}
    </div>
  )
}

export default Bets