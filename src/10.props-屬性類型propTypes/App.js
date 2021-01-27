import HelloWorld from './HelloWorld'
import HelloWorldClass from './HelloWorldClass'

function App() {
  return (
    <>
      <HelloWorld
        name={1}
        text={true}
        clickMethod={() => {
          alert('Test')
        }}
      />
      <HelloWorldClass />
    </>
  )
}

export default App
