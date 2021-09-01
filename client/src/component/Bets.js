import React, {useState} from 'react';
import "../css/bets.css"

function Bets({bet, home, away}){
  const [errors, setErrors] = useState([]);
  const [wagerForm, setWagerForm] = useState({
    bet: bet.id,
    wager: "",
    winnings: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setWagerForm({
      ...wagerForm,
      [name]: value,
    });
  };

  const handleSubmit = (e, bet) => {
    e.preventDefault();
    setErrors([]);
    if (window.confirm("Are you sure you want to place this bet?"))
      fetch("/betslips",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wagerForm),
      }).then((r) =>{
        if (r.ok) {
          r.json().then(alert("Your bet has been placed!"))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
  };

  return (
    <div className="card">
      <div>{bet.sports_title}</div>
      <div>{bet.date}</div>
      <button onClick={()=>home(bet)}>{bet.home_team}<br/>{bet.home_odds}</button>
      <button onClick={()=>away(bet)}>{bet.away_team}<br/>{bet.away_odds}</button>
      <form onSubmit={(e) => handleSubmit(e, bet)}>
        <label>Wager:
        <input
          type="number"
          min="0"
          placeholder="Enter bet amount"
          name="wager"
          value={wagerForm.wager}
          onChange={handleChange}
        /></label>
      </form>
      <form onSubmit={(e) => handleSubmit(e, bet)}>
        <label>To Win:
        <input
          type="number"
          min="0"
          placeholder="Enter winning amount"
          name="winnings"
          value={wagerForm.wager}
        /></label>
      <br/>
      <input type='submit' />
      </form>
      <div>{errors}</div>
    </div>
  )
}

export default Bets