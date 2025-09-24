import { useEffect, useState } from 'react'
import './App.css'
import ColorButton from './ColorButton'
import Sidebar from './Sidebar'

function App() {
  const colors = ["red", "yellow", "green"]
  const [index, setIndex] = useState(0)
  const [isLooping, setIsLooping] = useState(false)

  useEffect(() => {
    let timer;
    if (isLooping) {
      timer = setInterval(() => {
        setIndex(prev => (prev + 1) % colors.length);
      }, 1000); // change color every 1 second
    }
    return () => clearInterval(timer);
  }, [isLooping, colors.length]);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar on the left */}
      <Sidebar>
        <ColorButton label="Change Color" onClick={() => setIndex((index+1)%colors.length)}/>
        <ColorButton label={isLooping ? "Stop Looping" : "Start Looping"} onClick={() => setIsLooping(!isLooping)}/>
      </Sidebar>
    
      <div
        style={{
          flex: 1,
          height: "100vh",
          backgroundColor: colors[index],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          transition: "background-color 0.5s ease",
        }}
      >
        <h1>Background Color: {colors[index]}</h1>
      </div>
    </div>
  )
}

export default App
