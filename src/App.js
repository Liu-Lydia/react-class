import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'
import HelloWorldList from './components/HelloWorldList'
import MyLink from './components/MyLink'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      {/* <HelloWorld text="你好" name="Lily" />
      <HelloWorldClass text="你好" name="Lily" /> */}

      <HelloWorld
        name={1}
        text={true}
        clickMethod={() => {
          alert('Test')
        }}
      />
      <HelloWorldClass />
      <HelloWorldList name={['Tom', 'Emily', 'Micky']} />
      {/* JSX內容用{}包起來可以是任何東西[]、func等等 */}
      {/* <MyLink to="http://google.com.tw" text="google" /> */}
      <MyLink href="http://google.com.tw">google</MyLink>
      {/* google是children */}
    </>
  )
}

export default App
