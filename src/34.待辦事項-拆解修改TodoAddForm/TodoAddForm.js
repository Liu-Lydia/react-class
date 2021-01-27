import { useState } from 'react'
function TodoAddForm(props) {
  const [todo, setTodo] = useState('')
  const { handleAddNew } = props

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            handleAddNew(todo)

            setTodo('')
          }
        }}
      />
      <button
        onClick={() => {
          if (todo.trim()) {
            handleAddNew(todo)

            setTodo('')
          }
        }}
      >
        新增
      </button>
    </>
  )
}

export default TodoAddForm
