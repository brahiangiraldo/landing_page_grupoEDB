
import { CardsProps } from './CardsProps'
import './cards.scss'

const Cards = ({ title, description, width, minHeight, bgColor, textColor, src }: CardsProps) => {
  const cardStyle = {
    backgroundColor: bgColor,
    width: `${width}`,
    minHeight: `${minHeight}`
  }
  const textStyle = {
    color: textColor
  }

  return (
    <div className="card" style={ cardStyle }>
      <img src={ src } alt="" />
      <h2 style={ textStyle }>{ title }</h2>
      <p style={ textStyle }>{ description }</p>

    </div>
  )
}

export default Cards
