import React,{useState} from 'react'

export default function TernaryOperator() {
    const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
    {isLoggedIn ? <p>Good to have you here!</p> : <p>See you some other time.</p>}

    <button onClick={() => setLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout': 'Login'}
    </button>
    </div>
    
  )
}