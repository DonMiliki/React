import React, {useState} from "react";

export default function ConditionalRendering() {
  const [number, setNumber] = useState(); 
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setNumber(value);

    if (value === "") {
      setMessage("");
    } else {
      const num = Number(value);
      if (num >= 10) {
        setMessage(<p>You are successful.</p>);
      
      } else {
        setMessage(<p> Not successful. Try again later.</p>);
      }
    }
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Type a number"
      />

      {message}
      
    </div>
  );
}