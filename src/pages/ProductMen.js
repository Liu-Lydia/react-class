import { withRouter } from 'react-router-dom'

function ProductMen(props) {
  console.log(props)

  let searchParams = new URLSearchParams(props.location.search)

  return (
    <>
      <h1>PropductMen</h1>
      <h3>網址上查詢字串(Query String): </h3>
      <h5>i_code: {searchParams.get('i_code')}</h5>
      <h5>str_category_code: {searchParams.get('str_category_code')}</h5>
    </>
  )
}

export default withRouter(ProductMen)
