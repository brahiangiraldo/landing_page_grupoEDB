import './resumeGroup.scss'
import { ResumeGroupProps } from './ResumeGroupProps';



const ResumeGroup = ({ title, body }: ResumeGroupProps) => {
  return (
    <section className='containerResume'>
      <span className='resumeTitle'>{ title }</span>
      <p className='resumeBody'>
        { body }
      </p>
    </section>
  )
}

export default ResumeGroup;
