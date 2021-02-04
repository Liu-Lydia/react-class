import React from 'react'
import { useState } from 'react'

function Register(props) {
  //   const handleFormSubmit = (e) => {
  //     e.preventDefault()
  //     const data = new FormData(e.target)
  //     console.log(data.get('email'))

  //     for (var pair of data.entries()) {
  //       console.log(pair[0] + ', ' + pair[1])
  //     }
  //   }

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    account: '',
    password: '',
    password2: '',
  })

  //切換開始做檢查的旗標
  const [startToChecked, setStartToChecked] = useState(false)
  //錯誤陣列, 紀錄有錯誤的欄位名稱
  const [errors, setErrors] = useState([])

  const onChangeForField = (fieldName) => (e) => {
    setInputs((state) => ({ ...state, [fieldName]: e.target.value }))
  }

  //按了提交按鈕用的
  const handleSubmit = (e) => {
    //開啟開始觸發合法不合法的css
    setStartToChecked(true)

    const newErrors = []

    if (inputs.name.trim().length < 6) {
      newErrors.push('name')
    }

    const re = /\S+@\S+\.\S+/

    if (!re.test(inputs.email.toLowerCase())) {
      newErrors.push('email')
    }

    setErrors(newErrors)
  }

  //切換合法不合法的css與提示字詞
  const fieldValidCss = (fieldName) => {
    if (!startToChecked) return ''

    return errors.includes(fieldName) ? 'is-invalid' : 'is-valid'
  }

  return (
    <>
      <h1>會員註冊</h1>

      {/* <form onSubmit={handleFormSubmit}> */}
      <div className="form-group">
        <label htmlFor="inputName">姓名</label>
        <input
          type="text"
          className={`form-control ${fieldValidCss('name')}`}
          id="inputName"
          name="name"
          onChange={onChangeForField('name')}
          required
          aria-describedby="nameHelp"
        />
        <div class="valid-feedback">您的尊名有如天仙下凡，音容動人</div>
        <div class="invalid-feedback">這裡填錯了，您眼花了</div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">信箱</label>
        <input
          type="email"
          required
          className={`form-control ${fieldValidCss('email')}`}
          id="inputEmail"
          name="email"
          onChange={onChangeForField('email')}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="account">帳號</label>
        <input
          type="text"
          className="form-control"
          id="account"
          name="account"
          onChange={onChangeForField('account')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">密碼</label>
        <input
          type="password"
          name="password"
          onChange={onChangeForField('password')}
          className="form-control"
          id="inputPassword"
          minLength="6"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPasswordConfirm">再次確認密碼</label>
        <input
          type="password"
          name="password2"
          onChange={onChangeForField('password2')}
          className="form-control"
          id="inputPasswordConfirm"
          minLength="6"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        註冊
      </button>
      {/* </form> */}
    </>
  )
}

export default Register
