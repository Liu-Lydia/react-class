import { useState } from 'react'

function Birthday() {
  const [birth, setBirth] = useState('2020-01-01')
  return (
    <>
      <label for="birth">出生年月日 : </label>
      <input
        type="date"
        id="birth"
        name="birth"
        value={birth}
        onChange={(e) => {
          setBirth(e.target.value)
        }}
        min="1999-01-01"
        max="2021-01-27"
      />
    </>
  )
}

export default Birthday
