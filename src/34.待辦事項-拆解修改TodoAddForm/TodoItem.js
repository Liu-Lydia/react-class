function TodoItem(props) {
  const { item, handleCompleted, handleDelete } = props
  return (
    <>
      <li>
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
    </>
  )
}

export default TodoItem
