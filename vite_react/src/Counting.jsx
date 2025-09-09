import { useState } from "react"

// Without Props (just useState)
// function Counting(){
//     const [count, setCount] = useState(0);
//     console.log(count);
//     return (
//         <>
//             <h1>Count: {count}</h1>
//             <button onClick={()=> setCount(count+1)}>Increment</button>
//         </>
//     );
// }

// With Props and useState
function Counting(props){
    const [count, setCount] = useState(props.initialCount)
    console.log(count);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> count>0 ? setCount(count-1): 0}>Decrement</button>
        </>
    )
}

export default Counting;