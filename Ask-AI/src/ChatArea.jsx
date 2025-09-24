import ChatMessage from "./ChatMessage";
import MessageInput from "./MessageInput";

function ChatArea({messages, onSendMessage}){
    return (
        <div
        style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: "20px"
        }}>
            <div style={{ overflowY: "auto", flex: 1, marginBottom: "10px" }}>
                {messages.map((msg, idx) => (
                    <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
                ))}
            </div>
            <MessageInput onSendMessage={onSendMessage} />
        </div>
    );
}

export default ChatArea;