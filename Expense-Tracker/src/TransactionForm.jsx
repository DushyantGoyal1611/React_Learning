import { useState } from "react";

function TransactionForm({onAdd, type}){
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!description || !amount) return;
        onAdd({description, amount: Number(amount), type});
        setDescription("");
        setAmount("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h3>{type}</h3>
            <input 
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e)=> setAmount(e.target.value)}
            />
            <button type="submit">{type} +</button>
        </form>
    );
}

export default TransactionForm;