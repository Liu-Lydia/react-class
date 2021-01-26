function Child(props) {
  console.log(props)
  const innerData = '子女元件內部資料'

  return (
    <button
      onClick={() => {
        props.setData(innerData)
      }}
    >
      送資料給父母元件
    </button>
  )

  // return <h1>{props.data}</h1>
}

export default Child
