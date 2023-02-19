import './headerTemplate.scss'
import { HeaderTemplateProps } from './HeaderTemplateProps'

const HeaderTemplate = ({ head, body }: HeaderTemplateProps) => {
  return (
    <header className='headerContainer'>
      <section className='headConteiner'>{ head }</section>
      <section className='bodyHeader'>{ body }</section>
    </header>
  )
}

export default HeaderTemplate
