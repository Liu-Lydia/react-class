function MyLink(props) {
  console.log(props)
  return (
    <>
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    </>
  )
}
export default MyLink
