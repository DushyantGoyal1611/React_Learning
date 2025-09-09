import { useState } from 'react'

function App() {
  const [messages, setMessages] = useState([
    {sender:'bot', text:"Hello! How can i help you today?"}
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if(!input.trim()) return;

    
  }



  return (
    <>
      
    </>
  )
}

export default App
