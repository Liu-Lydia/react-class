import { useState, useEffect } from 'react'

function CountFunc() {
  const [total, setTotal] = useState(0)
  //旗標狀態, 代表使用者已經開始在更新狀態資料
  const [isUserStartToClick, setIsUserStartToClick] = useState(false)

  useEffect(() => {
    console.log('component did mount')
  }, [])

  useEffect(() => {
    if (isUserStartToClick) {
      console.log('component did update')
      console.log(total)
    }
  }, [total, isUserStartToClick])

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
          setIsUserStartToClick(true)
          setTotal(total - 1)
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setIsUserStartToClick(true)
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}

export default CountFunc
