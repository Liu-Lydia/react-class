import Child from './Child'
import { useState } from 'react'

function Parent() {
  // const innerData = '父母元件內部資料'
  //利用props直接傳遞資料給子女元件
  // return <Child data={innerData} />

  const [data, setData] = useState('') //setData是函式
  return (
    <>
      <h1>{data}</h1>
      {/* 給子女元件設定資料的函式作為props */}
      <Child setData={setData} />
    </>
  )
}

export default Parent
