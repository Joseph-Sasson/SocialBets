import React from 'react';

function Account({user, setUser}){

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this account?"))
      fetch(`/users/${user.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          setUser(null)
    }})};

  return (
    <div>
      <h2>My Account</h2>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email Address: {user.email}</li>
        <li>Bank: {user.bank}</li>
      </ul>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  )
}

export default Account