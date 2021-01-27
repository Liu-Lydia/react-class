//用此介面只能用字串,不是真正處理物件 HTML5
import { useState } from 'react'
function Birthday() {
  const [birth, setBirth] = useState('2018-02-11')

  return (
    <>
      <label for="birth">出生年月日:</label>
      {/* hrml5的日期輸入介面,注意格式最好使用字串 */}
      <input
        type="date"
        id="birth"
        name="birth"
        value={birth}
        onChange={(e) => {
          setBirth(e.target.value)
        }}
        min="1920-01-01"
        max="2021-1-27"
      ></input>
      <button onClick={() => {}}>送出</button>
    </>
  )
}

export default Birthday
