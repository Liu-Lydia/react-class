import { Component } from 'react'

class HelloWorldClass extends Component {
  constructor(props) {
    super()
    this.state = {}
    console.log(props)
  }

  render() {
    //可以用解構賦值,props可以直接得到
    const { name, text } = this.props

    return (
      <h1>
        {name}, {text}
      </h1>
    )
  }
}

export default HelloWorldClass
