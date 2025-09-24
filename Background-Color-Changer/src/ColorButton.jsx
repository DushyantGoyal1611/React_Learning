function ColorButton({label, onClick}){
    return (
        <button onClick={onClick}
        style={{
        margin: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
        }}>
            {label}
        </button>
    )
}

export default ColorButton;