import { withRouter } from 'react-router-dom'

function ProductBaby(props) {
  return (
    <>
      <h1>PropductBaby</h1>
      <h3>{props.match.params.id}</h3>
    </>
  )
}

export default withRouter(ProductBaby)
