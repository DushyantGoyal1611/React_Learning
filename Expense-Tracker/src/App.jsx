import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";


function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
      setTransactions((prev) => [...prev, transaction]);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar>
        <TransactionForm type="Income" onAdd={addTransaction} />
        <TransactionForm type="Expense" onAdd={addTransaction} />
      </Sidebar>

      <div style={{ flex: 1 }}>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
