import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  // let counter = 0
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }

  useEffect(() => {
    console.log("Counter changed:", counter);
  }, [counter]);

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
