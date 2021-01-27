import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '麥當勞', completed: false },
    { id: 2, text: '肯德基', completed: true },
    { id: 3, text: '摩斯漢堡', completed: false },
  ])

  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((item) => item.id === id)

    if (index > -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }

  const handleAddNew = (e) => {
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
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)

    setTodos(newTodos)
  }

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
          handleAddNew(e)
        }}
      />
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  handleCompleted(item.id)
                }}
              />
              {item.completed ? <del>{item.text}</del> : item.text}
              <button
                onClick={() => {
                  handleDelete(item.id)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
