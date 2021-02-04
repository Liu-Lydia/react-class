import { withRouter } from 'react-router-dom'

function ProductWomen(props) {
  console.log(props)

  return (
    <>
      <h1>PropductWomen</h1>
      <h3>history.push</h3>
      <button
        onClick={() => {
          props.history.push('/')
        }}
      >
        回到首頁
      </button>
      <button
        onClick={() => {
          props.history.push('/about')
        }}
      >
        到 關於我們
      </button>

      <h3>history.goBack</h3>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回上一頁
      </button>
    </>
  )
}

export default withRouter(ProductWomen)
