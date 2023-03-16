
import { ResumeHeadProps } from './ResumeHead.props';
import './resumeHead.scss'




const ResumeHead = ({ title, body }: ResumeHeadProps) => {
  return (
    <section className='containerResume'>
      <span className='resumeTitle'>{ title }</span>
      <p className='resumeBody'>
        { body }
      </p>
    </section>
  )
}

export default ResumeHead;