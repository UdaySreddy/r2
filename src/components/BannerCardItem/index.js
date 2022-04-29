// Write your code here.
import './index.css'

const Cards = props => {
  const {property} = props
  const {headerText, description, className} = property
  return (
    <div className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button className="buttons">Show More</button>
    </div>
  )
}

export default Cards
