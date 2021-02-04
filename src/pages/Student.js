import { data } from '../data/'
import { useState, useEffect } from 'react'

function Student(props) {
  const [students, setStudents] = useState([])

  //經過搜尋、排序
  const [studentDisplay, setStudentDisplay] = useState([])

  // 是不是在載入中
  const [isLoading, setIsLoading] = useState(true)

  //輸入用的文字輸入狀態
  const [search, setSearch] = useState('')

  const getDataFormServer = async () => {
    setIsLoading(true)

    const response = await fetch('http://localhost:5555/student', {
      method: 'get',
    })

    const data = await response.json()

    //最後設定到狀態中
    setStudents(data)
    setStudentDisplay(data)

    //3秒關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 3000) //3秒
  }

  //模擬componentDidMount
  useEffect(() => {
    getDataFormServer()
  }, [])

  const handleSearch = () => {
    setIsLoading(true)

    const newStudents = students.filter((v, i) => {
      return v.name.includes(search)
    })

    setStudentDisplay(newStudents)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000) //3秒
  }
  const spinner = (
    <>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )
  const display = (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">座號</th>
            <th scope="col">姓名</th>
            <th scope="col">出生年月日</th>
          </tr>
        </thead>
        <tbody>
          {studentDisplay.map((v, i) => (
            <tr key={i}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )

  return (
    <>
      <h1>學生資料</h1>
      以姓名搜尋:
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <button
        onClick={() => {
          handleSearch()
        }}
      >
        搜尋
      </button>
      {isLoading ? spinner : display}
    </>
  )
}

export default Student
