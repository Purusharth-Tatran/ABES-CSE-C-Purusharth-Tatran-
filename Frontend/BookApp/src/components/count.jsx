import React, { useState } from 'react';

function count() {
    const [Count,setCount]=useState(0);
    function increment(){
        setCount(Count+1);
    }
    function decrement(){
        setCount(Count-1);
    }
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={increment} id='btn'>+</button>
      <span >{Count}</span>
      <button onClick={decrement} id="btn">-</button>
    </div>
  )
}

export default count
