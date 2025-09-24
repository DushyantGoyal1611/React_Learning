import { useState } from "react";

function MessageInput({onSendMessage}){
    const [input, setInput] = useState("")

    const handleSend = () => {
        if(!input.trim()) return;
        onSendMessage(input);
        setInput("");
    };

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a message..."
                style={{ flex: 1, padding: "10px" }}
            />
            <button onClick={handleSend} style={{ padding: "10px 20px" }}>Send</button>
        </div>
    )
}

export default MessageInput;