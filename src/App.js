import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [Counter,setCounter] = useState (0);
  const increase = ()=> {
    setCounter(Counter+1)
  }
  const decrease = ()=> {
    Counter > 0 ? setCounter(Counter - 1):alert ("Te3ba La3bed")
    }

    const reset = ()=> {setCounter(0)}





  return (
    <div className="App">
      <h1>Hello State </h1>
      <h3>Value : {Counter}</h3>
      <br/>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <br/>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
