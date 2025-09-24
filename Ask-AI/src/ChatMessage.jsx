function ChatMessage({sender, text}){
    return (
        <div style={{
        backgroundColor: sender === "user" ? "#007bff" : "#ccc",
        color: sender === "user" ? "white" : "black",
        padding: "10px 15px",
        borderRadius: "15px",
        marginBottom: "10px",
        alignSelf: sender === "user" ? "flex-end" : "flex-start",
        maxWidth: "70%"
        }}>
        {text}
        </div>
    );
}

export default ChatMessage;