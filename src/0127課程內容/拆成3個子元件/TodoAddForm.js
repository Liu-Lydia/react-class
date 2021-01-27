function TodoAddForm(props) {
  const { todo, setTodo, handleAddNew } = props

  return (
    <>
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
    </>
  )
}

export default TodoAddForm
