// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorldList(props) {
  console.log(props)
  //解構賦值
  //names是陣列值
  const { name } = props
  return (
    <>
      {/* 陣列直接輸出成為Array,join('') */}
      {name}
      {[1, 2, 3]}
      {[<h2>123</h2>, <button>按我</button>, <a href="123.com">qoo</a>]}

      <ul>
        {/* 有用map記得加key值在最接近子元素中 */}
        {name.map((name, index) => {
          return (
            <li key={index} style={{ color: '#A3A3A2', fontSize: '3px' }}>
              {name}, 你好
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HelloWorldList
