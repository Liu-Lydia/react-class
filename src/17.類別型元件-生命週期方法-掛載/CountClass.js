import React from 'react'

class CountClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')

    document.querySelector('#clickme').addEventListener('click', function () {
      alert('你按到我了')
    })
  }

  render() {
    console.log('render')

    return (
      <>
        <h1>{this.state.total}</h1>
        <button id="clickme">按我</button>
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
            const newTotal = this.state.total + 1
            this.setState({ total: newTotal })
            console.log(newTotal)
          }}
        >
          +1
        </button>
      </>
    )
  }
}

export default CountClass
