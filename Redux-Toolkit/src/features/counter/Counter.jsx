import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, incrementByAmount, reset} from './counterSlice';

function Counter() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncrement(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br/>
        <button onClick={handleResetClick}>Reset</button>
        <br/>
        <input 
        type='Number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value)}
        />
        <br/>
        <button onClick={handleIncrement}>Increment by Amount</button>
    </>
  )
}

export default Counter