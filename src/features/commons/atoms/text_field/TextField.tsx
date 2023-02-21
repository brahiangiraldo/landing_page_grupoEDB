import { TextFieldProps } from './TextFieldProps'
import './textField.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

const TextField = ({ onChange, size }: TextFieldProps) => {
  const [classSize, setClassSize] = useState<string>()

  useEffect(() => {
    let nameClass = 'inputSm'
    if (size === 'md') {
      nameClass = 'inputMd'
    } else if (size === 'lg') {
      nameClass = 'inputLg'
    }
    setClassSize(classNames('customInput', nameClass))
  }, [size])

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // Get value
    const value: string = evt.target.value
    onChange(value)
  }

  return (
    <input className={ classSize } onChange={ handleOnChange } />
  )
}

export default TextField
