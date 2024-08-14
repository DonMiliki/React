 import React,{useState} from 'react'

export default function HandlingEventOnchange() {
 const [inputValue, setInputValue] = useState();

 const handleInputChange =(event) =>{
  setInputValue(event.target.value);
 }

  return (
    <div>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
        />

        <p>You typed: {inputValue}</p>
    </div>
  )
}