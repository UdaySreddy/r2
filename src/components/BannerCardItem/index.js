import './index.css'

const Cards = props => {
  const {property} = props
  const {headerText, description, className} = property
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button className="buttons" type="button">
        Show More
      </button>
    </li>
  )
}

export default Cards
