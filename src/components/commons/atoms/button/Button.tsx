import { ButtonProps } from './ButtonProps';
import './button.scss'

const Button = ({ text, txtColor, onClick, bgColor, width, height }: ButtonProps) => {
  return (
    <button className='container' onClick={ onClick }>{ text }</button>

  )
}

export default Button
