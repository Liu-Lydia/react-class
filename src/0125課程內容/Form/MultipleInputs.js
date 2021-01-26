import { useEffect, useState } from 'react'

function MultipleInputs(props) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    birth: '',
    price: '',
  })

  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }

  //   useEffect(() => {
  //     console.log(inputs)
  //   }, [inputs])

  return (
    <>
      <input
        type="text"
        value={inputs.name}
        // 每一個輸入框一定要加名稱,和定義的欄位狀態值最好一樣
        name="name"
        onChange={onChangeForField('name')}
      />
      <input
        type="text"
        value={inputs.email}
        // 每一個輸入框一定要加名稱,和定義的欄位狀態值最好一樣
        name="email"
        onChange={onChangeForField('email')}
      />
      <input
        type="text"
        value={inputs.username}
        // 每一個輸入框一定要加名稱,和定義的欄位狀態值最好一樣
        name="username"
        onChange={onChangeForField('username')}
      />
      <input
        type="password"
        value={inputs.password}
        // 每一個輸入框一定要加名稱,和定義的欄位狀態值最好一樣
        name="password"
        onChange={onChangeForField('password')}
      />
      <input
        type="date"
        value={inputs.birth}
        // 每一個輸入框一定要加名稱,和定義的欄位狀態值最好一樣
        name="birth"
        onChange={onChangeForField('birth')}
      />
      <input
        type="range"
        value={inputs.price}
        // 每一個輸入框一定要加名稱,和定義的欄位狀態值最好一樣
        name="price"
        onChange={onChangeForField('price')}
      />
    </>
  )
}

export default MultipleInputs
