import React,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment =() =>{
        setCount(count + 1); //updating the count in the component state
    }

    const decrement =() =>{
        setCount(count - 1); //updating the count in the component state
    }

    const multiply =() =>{
        setCount(count *2); //updating the count in the component state
    }
    const divide =() =>{
        setCount(count /2);
    }
return(
  <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Division</button>


    
    {/* States - memory or storage space that each Componentcan use to keep track of the information that might
    change over time. it is a way for components to 
    manage and remember their own data.Component

    usestate is a hook that allows us to add state to functional components */}
    </div>

)
}