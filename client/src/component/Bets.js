import React, {useState} from 'react';
import "../css/bets.css"

function Bets({bet, home, away, odds}){
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
    } else if ((e.target.name === 'away' && homeAway !== 'away_odds')) {
      away(bet)
      setHomeAway("away_odds")
    } else {
      setHomeAway('')
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
      <form onSubmit={(e) => handleSubmit(e, bet)}>
        <label>Wager:
        <input
          type="number"
          min="0"
          placeholder="Enter bet amount"
          name="wager"
          value={amount}
          onChange={homeAway ? pseudoBackend : handleChoose}
        /></label>
      </form>
      <form onSubmit={(e) => handleSubmit(e, bet)}>
        <label>To Win:</label>
        <span>{amount ? winnings : " "}</span>
      <br/>
      <input type='submit' />
      </form>
      <div>{errors}</div>
    </div>
  )
}

export default Bets