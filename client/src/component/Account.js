import React, {useState, useEffect} from 'react';
import BankHistory from './BankHistory';

function Account({user, setUser}){
  const [amount, setAmount] = useState(0)
  const [errors, setErrors] = useState([]);
  const [transactions, setTransactions] = useState([])
  const [toggleBank, setToggleBank] = useState(false)

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this account?"))
      fetch(`/users/${user.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          setUser(null)
    }})};

  const handleDeposit=()=>{
    if (window.confirm("Are you sure you want to deposit money?"))
    fetch(`/deposit/${user.id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({amount})
    }).then((r)=>r.json())
    .then(setUser)
  }

  const handleWithdraw=()=>{
    if (window.confirm("Are you sure you want to withdraw money?"))
    fetch(`/withdraw/${user.id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({amount})
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })}

  useEffect(()=>{
    fetch('/bank_transactions')
    .then((res)=>res.json())
    .then(setTransactions)
  }, [])

  const showBank = ()=>{
    setToggleBank(!toggleBank)
  }

  return (
    <div>
      <h2>My Account</h2>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email Address: {user.email}</li>
        <li>Bank: ${parseInt(user.bank)}</li>
        <input onChange={(e)=>setAmount(e.target.value)} type="number" min="0"/>
        <button onClick={handleDeposit} name="Deposit">Deposit</button>
        <button onClick={handleWithdraw} name="Withdraw">Withdraw</button>
        <div>{errors}</div>
      </ul>
      <button onClick={handleDelete}>Delete Account</button>
      <button onClick={showBank}>{toggleBank ? "Hide Bank History" : "Show Bank History"}</button>
      {toggleBank ? transactions.map(transaction=>{return <BankHistory key={transaction.id} transaction={transaction} />}) : false}
    </div>
  )
}

export default Account