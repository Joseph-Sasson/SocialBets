import React from 'react';

function Message({message}){

  return (
    <div className='card'>
      From: {message.user.name}
      <br/>
      {message.message}
    </div>
  )
}

export default Message

