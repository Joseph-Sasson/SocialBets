import React, {useState} from 'react';
import "../css/bets.css"
import BetForm from './BetForm';

function Bets({bet, home, away, odds}){
  const [toggleForm, setToggleForm] = useState(false)
  const [homeAway, setHomeAway] = useState([])
  const [errors, setErrors] = useState([]);
  const [winnings, setWinnings] = useState('')
  const [amount, setAmount] = useState('')
  const [wagerForm, setWagerForm] = useState({
    bet: bet.id,
    wager: amount,
    winnings: winnings
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setWagerForm({
    //   ...wagerForm,
    //   [name]: value,
    // });
  };

  const handleClick = (e) =>{
    if (e.target.name === 'home' && homeAway !== 'home_odds') {
      home(bet)
      setHomeAway("home_odds")
      setAmount('')
      if (toggleForm === false) {
        setToggleForm(true)
      }
    } else if ((e.target.name === 'away' && homeAway !== 'away_odds')) {
      away(bet)
      setHomeAway("away_odds")
      setAmount('')
      if (toggleForm === false) {
        setToggleForm(true)
      }
    } else {
      setHomeAway('')
      setToggleForm(!toggleForm)
    }
  }

  const pseudoBackend = async (e) => {
    setAmount(e.target.value)
    // console.log("Bet:", bet.id)
    // console.log("HomeAway:", homeAway)
    // console.log("Amount:", e.target.value)

    // Bet.find_by(id: params[:bet_id])
    console.log("odds:", bet[homeAway])
    const newWinnings = (bet[homeAway] > 0 ? ((bet[homeAway] * parseInt(e.target.value))/100) : (((parseInt(e.target.value)*100)/bet[homeAway])* -1))
    setWinnings(newWinnings)
  }

  const handleChoose =(e)=>{
    alert("You must choose a bet to wager!")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (homeAway === 'home_odds' || homeAway === 'away_odds'){
      if (window.confirm("Are you sure you want to place this bet?"))
        fetch("/betslips",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(wagerForm),
        }).then((r) =>{
          if (r.ok) {
            r.json().then((err)=>alert(err.errors))
          } else {
            r.json().then((err) => setErrors(err.errors));
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
      {toggleForm ? <BetForm handleSubmit={handleSubmit} amount={amount} homeAway={homeAway} pseudoBackend={pseudoBackend} handleChoose={handleChoose} winnings={winnings} errors={errors} bet={bet}/> : false}
    </div>
  )
}

export default Bets