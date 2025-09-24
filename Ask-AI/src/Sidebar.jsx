function Sidebar({ chats, currentChatIndex, onSelectChat, onNewChat }){
    return (
        <div style={{
        width: "250px",
        backgroundColor: "#222",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
        }}>
            <h2>Chats</h2>
            <button onClick={onNewChat} style={{ marginBottom: "10px" }}>+ New Chat</button>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {chats.map((chat, idx) => (
                    <button
                        key={chat.id}
                        onClick={() => onSelectChat(idx)}
                        style={{
                        backgroundColor: idx === currentChatIndex ? "#555" : "#333",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        cursor: "pointer",
                        textAlign: "left"
                        }}
                    >
                        {chat.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
