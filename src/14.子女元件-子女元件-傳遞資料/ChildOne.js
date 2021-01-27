function ChildOne(props) {
  const innerData = 'ChildOne子女內部的資料'

  return (
    <button
      onClick={() => {
        props.setData(innerData)
      }}
    >
      給ChildTwo送資料
    </button>
  )
}
export default ChildOne
