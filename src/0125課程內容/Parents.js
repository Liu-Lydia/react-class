import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import { useState } from 'react'

function Parents() {
  const [data, setData] = useState('') //setData是函式
  return (
    <>
      <ChildOne setData={setData} />
      <ChildTwo data={data} />
    </>
  )
}

export default Parents
