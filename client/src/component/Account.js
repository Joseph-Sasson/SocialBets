import React from 'react';

function Account({user, setUser}){

  console.log(user)

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Bank: ${user.bank}</p>
    </div>
  )
}

export default Account