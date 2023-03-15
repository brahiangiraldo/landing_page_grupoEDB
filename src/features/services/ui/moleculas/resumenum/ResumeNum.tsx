
import './resumenum.scss'
import { ResumeNumProps } from './ResumeNumProps'

const ResumeNum = ({ title, body }: ResumeNumProps) => {
  return (
    <section className='container'>
      <span className='resumeTitleNum'>{ title }</span>
      <p className='resumeBodyNum'>
        { body }
      </p>
    </section>
  )
}

export default ResumeNum