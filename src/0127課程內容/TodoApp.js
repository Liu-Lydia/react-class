import { useState } from 'react'
function TodoApp() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(['買東西', '買東東', '買東南'])

  return (
    <>
      <h1>待辦事項</h1>
      {/* React可控表單元件: 值對應到狀態, onChange對應到設定狀態 */}
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        //判斷是否按下enter鍵,而且不是空白沒寫的情況
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            const newTodo = [e.target.value, ...todos]

            //設定todos(待辦事項清單)
            setTodos(newTodo)
            //清空輸入文字
            setTodo('')
          }
        }}
      />
      <ul>
        {/* 從陣列值中map出來, 記得加上key值 */}
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
