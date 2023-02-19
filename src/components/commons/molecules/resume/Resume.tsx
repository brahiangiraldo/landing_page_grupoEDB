import './resume.scss'
import { ResumeProps } from './ResumeProps'

const Resume = ({ title, body }: ResumeProps) => {
  return (
    <section className='containerResume'>
      <span className='resumeTitle'>{ title }</span>
      <p className='resumeBody'>
        { body }
      </p>
    </section>
  )
}

export default Resume
