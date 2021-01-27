import { Component } from 'react'
import PropTypes from 'prop-types'

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

HelloWorldClass.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloWorldClass
