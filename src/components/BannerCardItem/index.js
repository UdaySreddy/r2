// Write your code here.
const Boxes = props => {
  const {classs} = props
  const {headerText, description, className} = classs

  return (
    <div className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>show more</button>
    </div>
  )
}

export default Boxes
