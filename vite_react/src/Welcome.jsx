function Welcome(props){
    console.log(props)
    return <h1>Hello, {props.name}!, I know you are {props.age} years old</h1>
}

export default Welcome;