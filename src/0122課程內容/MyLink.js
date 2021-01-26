import PropTypes from 'prop-types'

function MyLink(props) {
  return (
    // <a href={props.to} targt="_blank" style={{ color: '#A3A3A2' }}>
    //   {props.text}
    // </a>
    <a href={props.href} targt="_blank" style={{ color: '#A3A3A2' }}>
      {props.children}
    </a>
  )
}

export default MyLink
