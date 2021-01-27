import { useState } from 'react'
import CountFunc from './CountFunc'

function CountParent() {
  const [initNumber, setInitNumber] = useState(0)

  return (
    <>
      <CountFunc initNumber={initNumber} />
      <button
        onClick={() => {
          setInitNumber(10)
        }}
      >
        設定一開始為10
      </button>
      <button
        onClick={() => {
          setInitNumber(100)
        }}
      >
        設定一開始為100
      </button>
    </>
  )
}

export default CountParent
