function HelloWorld(props) {
  const { name, text } = props

  return (
    <h1>
      {name}, {text}
    </h1>
  )
}

HelloWorld.defaultProps = {
  name: 'AB',
  text: '安安',
}

export default HelloWorld
