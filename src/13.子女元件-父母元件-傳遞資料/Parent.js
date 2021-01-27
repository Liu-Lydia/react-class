import { useState } from 'react'
import Child from './Child'

function Parent() {
  const [data, setData] = useState('')

  return (
    <>
      <h1>{data}</h1>
      <Child setData={setData} />
    </>
  )
}

export default Parent
