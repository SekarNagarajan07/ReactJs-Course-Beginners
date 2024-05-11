import { useState } from 'react';
import './App.css';

function App() {
  //let counter = 15;

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // counter = counter+1;
    // console.log(counter);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    //setCounter(counter + 1);

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )

}

export default App
