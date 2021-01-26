function ChildOne(props) {
  const innerData = '送資料給ChildTwo元件'

  return (
    <button
      onClick={() => {
        props.setData(innerData)
      }}
    >
      送資料給ChildTwo元件
    </button>
  )
}

export default ChildOne
