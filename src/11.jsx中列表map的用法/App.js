import HelloWorldList from './HelloWorldList'
import MyLink from './MyLink'

function App() {
  return (
    <>
      <HelloWorldList names={['AB', 'CC', 'LL']} />
      <MyLink href="http://google.com.tw">GOOGLE</MyLink>
    </>
  )
}

export default App
