import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '麥當勞', completed: false },
    { id: 2, text: '肯德基', completed: true },
    { id: 3, text: '摩斯漢堡', completed: false },
  ])

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
            const newTodoItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
            }

            const newTodos = [newTodoItem, ...todos]

            setTodos(newTodos)

            setTodo('')
          }
        }}
      />
      <ul>
        {todos.map((item, index) => {
          if (item.completed) {
            return (
              <li key={item.id}>
                <del>{item.text}</del>
              </li>
            )
          }
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
