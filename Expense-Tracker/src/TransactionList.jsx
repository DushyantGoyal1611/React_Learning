function TransactionList({transactions}){
    const total = transactions.reduce(
        (acc, t) => t.type === "Income" ? acc + t.amount : acc - t.amount, 0
    );

    return (
        <div style={{ padding: "20px" }}>
            <h2>Total: ${total}</h2>
            <ul>
                {transactions.map((t, idx) => (
                    <li key={idx}>
                        {t.type}: {t.description} - ${t.amount}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;