import React, {useState} from 'react';
import "../css/bets.css"

function Bets({bet, home, away, submit, errors}){
  const [wagerForm, setWagerForm] = useState({
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

  return (
    <div className="card">
      <div>{bet.sports_title}</div>
      <div>{bet.date}</div>
      <button onClick={()=>home(bet)}>{bet.home_team}<br/>{bet.home_odds}</button>
      <button onClick={()=>away(bet)}>{bet.away_team}<br/>{bet.away_odds}</button>
      <form onSubmit={(e) => submit(e, bet)}>
        <label>Wager:
        <input
          type="number"
          placeholder="Enter wager amount"
          name="wager"
          value={wagerForm.wager}
          onChange={handleChange}
        /></label>
      </form>
      <form onSubmit={(e) => submit(e, bet)}>
        <label>To Win:
        <input
          type="number"
          placeholder="Enter winning amount"
          name="winnings"
          value={wagerForm.winnings}
          onChange={handleChange}
        /></label>
      <br/>
      <input type='submit' />
      </form>
      {/* <div>
        {errors.map((err) => (
          <span>!{err}</span>
        ))}
      </div> */}
    </div>
  )
}

export default Bets