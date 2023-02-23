
import { CardsProps } from './CardsProps'
import './cards.scss'

const Cards = ({ children }: CardsProps) => {

  return (
    <div className="card">
      { children }
    </div>
  )
}

export default Cards
