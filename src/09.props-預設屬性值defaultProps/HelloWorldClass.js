import { Component } from 'react'

class HelloWorldClass extends Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    const { name, text } = this.props
    return (
      <h1>
        {name}, {text}
      </h1>
    )
  }
}

HelloWorldClass.defaultProps = {
  name: 'AB',
  text: '安安',
}

export default HelloWorldClass
