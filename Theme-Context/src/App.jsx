import { createContext, use, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'
  
export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme === 'light'? "beige": 'black'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
