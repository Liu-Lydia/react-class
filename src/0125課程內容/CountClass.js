import React from 'react'

class CountClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  //順序放中間,但是是最後執行
  componentDidMount() {
    console.log('componentDidMount')
    //只有在componentDidMount才能得到dom元素
    document.querySelector('#clickme').addEventListener('click', function () {
      alert('你按到我了')
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    //和componentDidMount中成對的,這裡做移除事件
    document
      .querySelector('#clickme')
      .removeEventListener('click', function () {
        alert('你按到我了')
      })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    //可以得到最後更新過後的狀態值
    console.log('目前的狀態 ', this.state.total)
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>{this.state.total}</h1>

        <button id="clickme">測試componentDidMount</button>

        <button
          onClick={() => {
            const newTotal = this.state.total - 1
            this.setState({ total: newTotal })
            console.log(newTotal)
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          +1
        </button>
      </>
    )
  }
}

export default CountClass
