 import React, {useState} from "react";

export default function ConditionalRendering() {
  const [number, setNumber] = useState(); //store the input value
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setNumber(value);

    if (value === "") {
      setMessage("");
    } else {
      const num = Number(value);
      if (num > 10) {
        setMessage(<p>Number is greater than 10</p>);
      } else if (num < 0) {
        setMessage(<p>Number is Negative</p>);
      } else {
        setMessage(<p>Number is between 0 and 10</p>);
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
      {/* 1. Uisng javascript conditional statements-if,else if,else
        2. Ternary operator - condition ? true:false
        3. Logical && operator - && */}
    </div>
  );
}