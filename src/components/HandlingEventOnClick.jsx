import React,{useState} from 'react'

export default function HandlingEvents() {
  const [message, setMessage] = useState();

  const handleClick = () =>{
  setMessage('Button is clciked');
  }
  return (
    <div>
     <button onClick={handleClick}>Click me</button>
     <p>{message}</p>
    {/* onClick
    onChange
    onSubmit */}
    </div>
  )
}