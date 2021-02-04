function Home(props) {
  console.log(props)

  const { auth } = props
  return (
    <>
      <h1>Home</h1>
      <h1>{auth ? '會員已登入' : '未登入'}</h1>
    </>
  )
}

export default Home
