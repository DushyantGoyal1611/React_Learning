import MSG from "./Demo"
import Welcome from "./Welcome"
import ButtonProps from "./buttonProps"
import Counting from "./Counting"

function User({ name }) {
  return <li>{name}</li>;
}

function App() {
  //age is inside {} to treat it as a Number instead of String
  // can't return comments directly in return
  const fruits = ["banana", "apple", "mango"]
  const users = [
    {id: 1, name:"Dushyant"},
    {id: 2, name:"Udhbhav"},
    {id: 3, name:"Tushar"}
  ]

  const games = ["Gow", "Spiderman", "RDR2"]
  const isLoggedIn = true

  return (
    <>

      <Welcome name="Dushyant" age={22}/>
      <MSG/>
      <h2>The Message is:</h2>
      <h3>Hello Dushyant, Nice meeting you</h3>
      <p>Choose a button</p>
      <ButtonProps number={1} color="red"/>
      <ButtonProps number={2} color="blue"/>
      {/* <Counting/> */}
      <Counting initialCount={0}/>

      <ul>
        {fruits.map((fruit)=> (
          <li>{fruit}</li>
        ))}
      </ul>

      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))
        }
      </ul>

      <ul>
        {games.map((game, index)=>(
          <User key={index} name={game}/>
        ))}
      </ul>

      {isLoggedIn ? "Welcome Dushyant" : "Please Log in"}
    </>
  )
}

export default App
