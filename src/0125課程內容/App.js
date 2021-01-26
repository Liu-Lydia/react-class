import { useState } from 'react'

import Parent from './components/Parent'
import Parents from './components/Parents'
import CountParent from './components/CountParent'
// import CountClass from './components/CountClass'
import CountFuncEffect from './components/CountFuncEffect'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* if的簡寫法 */}
      {/* {show && <CountClass />} */}
      {show && <CountFuncEffect />}
      <hr />
      <button
        onClick={() => {
          //trigger切換狀態布林值的語法
          setShow(!show)
        }}
      >
        {/* if...else...的簡寫法 */}
        {show ? '消失吧' : '回來吧'}
      </button>

      <Parent />
      <Parents />
      <CountParent />
      {/* <CountClass /> */}
    </>
  )
}

export default App
