import { useState } from 'react'
import CountFunc from './CountFunc'

function CountParent() {
  //const [initNumber, setInitNumber] = useState(0) 以props作為初始化值

  //使用狀態
  const [total, setTotal] = useState(0)

  return (
    <>
      {/* <CountFunc initNumber={initNumber} />  以props作為初始化值*/}

      {/* 以props作為初始化值,利用父母元件的state利用父母元件的state */}
      <CountFunc total={total} setTotal={setTotal} />

      <button
        onClick={() => {
          setTotal(10)
        }}
      >
        重設定, 一開始為10
      </button>
      <button
        onClick={() => {
          setTotal(100)
        }}
      >
        重設定, 一開始為100
      </button>
    </>
  )
}
export default CountParent
