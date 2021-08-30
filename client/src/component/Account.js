import React, {useState} from 'react';

function Account({user, setUser}){
  const [amount, setAmount] = useState(0)
  const [errors, setErrors] = useState([]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this account?"))
      fetch(`/users/${user.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          setUser(null)
    }})};

    const handleDeposit=()=>{
      fetch(`/deposit/${user.id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(amount)
      }).then(window.location.reload(false))
    }

    const handleWithdraw=()=>{
      fetch(`/withdraw/${user.id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(amount)
      }).then((r) => {
        if (r.ok) {
          r.json().then(window.location.reload(false))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
}

  return (
    <div>
      <h2>My Account</h2>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email Address: {user.email}</li>
        <li>Bank: ${user.bank}</li>
        <input onChange={(e)=>setAmount(e.target.value)} type="number" min="0"/>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        <div>{errors}</div>
      </ul>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  )
}

export default Account