import { useState } from 'react'
import CountFunc from './CountFunc'
function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      {show && <CountFunc />}
      <hr />
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '消失吧' : '回來吧'}
      </button>
    </>
  )
}

export default App
