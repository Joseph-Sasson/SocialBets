import React from 'react';


function BankHistory({transaction}){

  return (
    <div className='row'>
      <div className='card'>
        {transaction.transaction_type}
        <br/>
        Amount: ${transaction.amount}
        <br/>
        Date: {transaction.date}
      </div>
    </div>
  )
}

export default BankHistory

