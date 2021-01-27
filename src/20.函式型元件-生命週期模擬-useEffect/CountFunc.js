import { useState, useEffect } from 'react'

function CountFunc() {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log('component did mount')
  }, [])

  useEffect(() => {
    console.log('component did update')
    console.log(total)
  }, [total])

  useEffect(() => {
    return () => {
      console.log('component will unmount')
    }
  }, [])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total - 1)
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
  )
}

export default CountFunc
