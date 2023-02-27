
import './resumenum.scss'
import { ResumeNumProps } from './ResumeNumProps'

const ResumeNum = ({ title, body }: ResumeNumProps) => {
  return (
    <section>
      <div>
        <span className='resumeTitleNum'>{ title }</span>
        <p className='resumeBodyNum'>
          { body }
        </p>
      </div>
    </section>
  )
}

export default ResumeNum