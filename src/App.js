import React, { useState } from 'react';
import { CounterContext } from './CounterContext';
import FComponent from './FComponent';

function App() {

  var [counter, setCounter] = useState(0);

  var increment =()=>{
    setCounter(counter+1);
  };

  var decrement = () =>{
    setCounter (counter - 1);
  }


  return (
    <div>
      <h1>App file</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>

      <br />
      <br />

      <CounterContext.Provider>
        <FComponent counter={counter} />
      </CounterContext.Provider>

    </div>
  );
}

export default App;