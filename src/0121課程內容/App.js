import CountFunc from './components/CountFunc' //不用加副檔名.js
import CountClass from './components/CountClass'
import SelectBox from './components/SelectBox'

function App() {
  return (
    <>
      <h2>函式型元件</h2>
      <CountFunc />
      <h2>類別型元件</h2>
      <CountClass />
      <br />
      <SelectBox />
    </>
  )
}

export default App
