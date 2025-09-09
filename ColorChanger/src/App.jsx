import { useState, useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const background_colors = ["blue", "green", "pink", "yellow", "orange", "red"]
  const [index, setIndex] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  const changebg = () => {
    setIndex((index) => (index+1)%background_colors.length)
  }

  const toggleAutoChange = () => {
    if(!isRunning){
      intervalRef.current = setInterval(changebg, 1000)
      setIsRunning(true)
    }else{
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setIsRunning(false)
    }
  }

  return (
    <div style={{
        backgroundColor: background_colors[index],
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <button id="btn1" onClick={changebg}>Change Manually</button>
      <button id="btn2" onClick={toggleAutoChange}>{isRunning ? "Stop Auto Change" : "Start Auto Change"}</button>
    </div>
  )
}

export default App
