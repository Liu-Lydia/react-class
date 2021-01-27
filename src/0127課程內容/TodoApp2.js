import { useState } from 'react'
function TodoApp() {
  const [todo, setTodo] = useState('')

  //將每個事項改為物件值
  //{id:todos, text:string, completed:bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '買東西', completed: false },
    { id: 2, text: '買東東', completed: false },
    { id: 3, text: '買東南', completed: false },
  ])

  const handleCompleted = (id) => {
    //先拷貝一個新陣列, todos只能被setTodos更動, 所以要拷貝
    const newTodos = [...todos]

    //利用id值找對應的todos item的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    //如果有找到則不會是-1 (findIndex()特性, 沒有相符則返回-1)
    if (index > -1) {
      //切換布林值, true變false, false變true
      newTodos[index].completed = !newTodos[index].completed

      //設定回原本的todos
      setTodos(newTodos)
    }
  }

  const handleAddNew = (e) => {
    //判斷是否按下enter鍵,而且不是空白沒寫的情況(用trim去除前後空白)
    if (e.key === 'Enter' && e.target.value.trim()) {
      //建立新的todos項目物件值, 用時間物件轉為秒整數當id值
      const newTodoItem = {
        id: +new Date(),
        text: e.target.value,
        completed: false,
      }
      //先作陣列unshift, 像前面加入一個新的成員
      const newTodos = [newTodoItem, ...todos]

      //設定todos(待辦事項清單)
      setTodos(newTodos)
      //清空輸入文字
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
      {/* React可控表單元件: 值對應到狀態, onChange對應到設定狀態 */}
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
        {/* 從陣列值中map出來, 記得加上key值 */}
        {/* 判斷依照不同的completed值作不同的呈現樣子 */}
        {todos.map(
          (item, index) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => {
                    handleCompleted(item.id)
                  }}
                />
                {/* <del>{item.text}</del> */}
                {/* 用三元表達式改寫, 簡化語法 */}
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
          }

          //上面if內如果回傳就不會執行到這行
          // return (
          //<li key={item.id}>
          // <input
          // type="checkbox"
          //checked={item.completed}
          //onChange={() => {
          // handleCompleted(item.id)
          //}}
          ///>
          //{item.text}
          //</li>
          //)
        )}
      </ul>
    </>
  )
}

export default TodoApp
