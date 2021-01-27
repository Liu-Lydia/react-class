import { useState, useEffect } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'

registerLocale('zh-TW, zhTW')

function Birthday() {
  const [birth, setBirth] = useState(new Date())
  const [age, setAge] = useState(0)

  const calcAge = (birth) => ~~((new Date() - birth) / 31557600000)

  useEffect(() => {
    setAge(calcAge(birth))
  }, [birth])

  return (
    <>
      <label for="birth">出生年月日 : </label>
      <DatePicker
        selected={birth}
        dateFormat="yyyy-MM-dd"
        locale="zh-Tw"
        showYearDropdown
        onChange={(date) => setBirth(date)}
      />
      <h2>{age > 18 ? '滿18' : '未滿18'}</h2>
    </>
  )
}

export default Birthday
