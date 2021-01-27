function HelloWorldList(props) {
  console.log(props)
  const { names } = props

  return (
    <>
      {names}
      <ul>
        {names.map((name, index) => {
          return (
            <li key={index} style={{ color: '#a2a2a3', fonsize: 20 }}>
              {name},你好
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HelloWorldList
