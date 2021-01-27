function HelloWorld(props) {
  //可以用解構賦值const {name, text} = props
  return (
    <h1>
      {props.name}, {props.text}
    </h1>
  )
}

export default HelloWorld
