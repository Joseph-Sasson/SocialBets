import React from 'react';


function BankHistory({transaction}){

  return (
    <div className='row'>
      <div className='card'>
        Transaction Type: {transaction.transaction_type}
        <br/>
        Amount: ${transaction.amount}
        <br/>
        Transaction Date: {transaction.bank_time}
      </div>
    </div>
  )
}

export default BankHistory

