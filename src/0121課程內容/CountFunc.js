import { useState } from 'react' //useState使用狀態,稱作勾子,用花括號包起來 / React

function CountFunc() {
  const [total, setTotal] = useState(0) //解構賦值,自己命名的 / React.useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total - 1) //值
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  ) //()裡面是一句,回傳一個值 / <> </> JSX 要有根元素
}

export default CountFunc //預設輸出
