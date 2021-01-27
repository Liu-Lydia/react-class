//Reace DatePicker
import { useEffect, useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

//改為台灣繁體中文的日期樣式
//參考：https://github.com/Hacker0x01/react-datepicker/#localization

import { registerLocale, setDefaultLocale } from 'react-datepicker'

import { zhTW } from 'date-fns/esm/locale'

registerLocale('zh-TW', zhTW)

function BirthdayDate() {
  const [birthDate, setbirthDate] = useState(new Date())
  const [age, setAge] = useState(0)

  //`~~`為轉為整數值
  const calcAge = (birthDate) => ~~((new Date() - birthDate) / 31557600000)

  //選完日期就改變年紀
  useEffect(() => {
    setAge(calcAge(birthDate))
  }, [birthDate])

  return (
    <>
      <label for="birth">出生年月日:</label>
      <DatePicker
        selected={birthDate}
        dateFormat="yyy-MM-dd"
        locale="zh-TW"
        showYearDropdown
        onChange={(date) => setbirthDate(date)}
      />

      {/* 也可以用按鈕來觸發計算age */}
      {/* <button
        onClick={() => {
          setAge(calcAge(birthDate))
        }}
      >
        送出
      </button> */}

      <h2>{age > 18 ? '滿18歲' : '未滿18歲'}</h2>
    </>
  )
}

export default BirthdayDate
