import PropTypes from 'prop-types'

function HelloWorld(props) {
  const { name, text, clickMethod } = props

  return (
    <h1 onClick={clickMethod}>
      {name}, {text}
    </h1>
  )
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloWorld
