function Child(props) {
  const innerData = '子女內部的元件'

  return (
    <button
      onClick={() => {
        props.setData(innerData)
      }}
    >
      送資料給父母元件
    </button>
  )
}
export default Child
