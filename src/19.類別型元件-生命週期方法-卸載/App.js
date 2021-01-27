import { useState } from 'react'
import CountClass from './CountClass'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <CountClass />}
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
