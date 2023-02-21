import { ButtonProps } from './ButtonProps'
import './button.scss'


const Button = ({ text, txtColor, bgColor, width, height }: ButtonProps) => {
  const buttonStyle = {

    // width: `${width}px`, // width + 'px'
    // height: `${height}px`,
    backgroundColor: bgColor,
    color: txtColor,
  };

  return (
    <button style={ buttonStyle } className={ 'button' }>{ text }</button>
  );
}

export default Button;
