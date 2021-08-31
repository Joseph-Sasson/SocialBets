import React, {useState} from 'react';


function BetForm({bet}){
  const [slipForm, setSlipForm] = useState({
    user_id: "",
    bet_id: "",
    wager: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSlipForm({
      ...slipForm,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <label>Wager:
        <input
          type="number"
          placeholder="Enter wager amount"
          name="wager"
          value={slipForm.wager}
          onChange={handleChange}
        /></label>
        <input />
      </form>
    </div>
  )
}

export default BetForm