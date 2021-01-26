function CountFunc(props) {
  //const [total, setTotal] = useState(0) 以props作為初始化值

  //以props作為初始化值,利用父母元件的state利用父母元件的state
  const { total, setTotal } = props

  return (
    <>
      {/* <h1>{props.initNumber + total}</h1> 以props作為初始化值*/}

      {/* 以props作為初始化值,利用父母元件的state利用父母元件的state */}
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}

export default CountFunc
