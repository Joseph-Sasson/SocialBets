import React, {useState} from 'react';
import Message from './Message';

function Forum({message}){
  const [errors, setErrors] = useState([]);
  const [messageForm, setMessageForm] = useState({
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMessageForm({
      ...messageForm,
      [name]: value,
    });
  };

  const submitChange = (e) =>{
    e.preventDefault()
    fetch(`/messages`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageForm)
    }).then((r)=>{
      if (r.ok){
        r.json().then(console.log)
      }else{
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }

  return (
    <>
    <div className='row'>
      <Message message={message} />
    </div>
    <form>
      <input type = 'text' name="message" onChange={handleChange}/>
      <input type = 'submit' onClick={submitChange} />
    </form>
    <div>
        {errors.map((err) => (
          <span>!{err}</span>
        ))}
      </div>
    </>
  )
}

export default Forum

