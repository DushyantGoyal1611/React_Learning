function Sidebar({children}){
    return (
        <div
        style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        }}>
            <h2>Controls</h2>
            {children}
        </div>
    )
}

export default Sidebar;