function ButtonProps(props){
    return (
        <button style={{background:props.color}}>Click {props.number}</button>
    );
}

export default ButtonProps;