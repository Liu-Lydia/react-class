import { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

function App() {
  const buttonOneRef = useRef(null)

  const [data, setData] = useState(123)

  useEffect(() => {
    $('#one').on('click', () => alert('data is' + data))
    //console.log(buttonOneRef.current)
    $(buttonOneRef.current).on('click', () => alert('data is' + data))
  }, [])

  return (
    <>
      <button id="one">click me1</button>

      <button ref={buttonOneRef}>click me2</button>
    </>
  )
}

export default App
