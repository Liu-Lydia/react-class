import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState(['逛街', '吃飯', '睡覺'])

  return (
    <>
      <h1>待辦事項</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            const newTodos = [e.target.value, ...todos]

            setTodos(newTodos)

            setTodo('')
          }
        }}
      />
      <ul>
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
