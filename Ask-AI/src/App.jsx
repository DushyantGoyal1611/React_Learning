import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

function App() {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: "Chat 1",
      messages: [{ sender: "bot", text: "Hello! How can I help you?" }]
    }
  ]);

  const [currentChatIndex, setCurrentChatIndex] = useState(0);

  const handleSendMessage = (text) => {
    const newMessage = { sender: "user", text };
    const botMessage = { sender: "bot", text: "Bot reply to: " + text };

    const updatedChats = [...chats];
    updatedChats[currentChatIndex].messages.push(newMessage, botMessage);

    setChats(updatedChats);
  };

  const handleNewChat = () => {
    const newChat = {
      id: chats.length + 1,
      title: `Chat ${chats.length + 1}`,
      messages: [{ sender: "bot", text: "Hello! How can I help you?" }]
    };
    setChats([...chats, newChat]);
    setCurrentChatIndex(chats.length); // switch to new chat
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar 
        chats={chats} 
        currentChatIndex={currentChatIndex} 
        onSelectChat={setCurrentChatIndex}
        onNewChat={handleNewChat}
      />
      <ChatArea 
        messages={chats[currentChatIndex].messages} 
        onSendMessage={handleSendMessage} 
      />
    </div>
  )
}

export default App;
