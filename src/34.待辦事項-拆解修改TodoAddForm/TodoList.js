import TodoItem from './TodoItem'

function TodoList(props) {
  const { todos, handleCompleted, handleDelete } = props

  return (
    <>
      <ul>
        {todos.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
