import { useState } from 'react'

function MoneyEx() {
  const [money, setMoney] = useState('')
  const [exMoney, setExMoney] = useState('')

  //值對應到狀態值,觸發事件對應設定狀態(表單兩者都一定要有)
  return (
    <>
      <input
        type="text"
        value={money}
        onChange={(e) => {
          setMoney(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setExMoney((+money / 28.53).toFixed(2))
        }}
      >
        台幣轉換成美金
      </button>
      <button
        onClick={() => {
          setExMoney((+money * 28.53).toFixed(0))
        }}
      >
        美金轉換成台幣
      </button>
      <h1>轉換過的金額是: {exMoney}</h1>
    </>
  )
}

export default MoneyEx
