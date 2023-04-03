import './resume.scss'
import { ResumeProps } from './ResumeProps'

const Resume = ({ title, body }: ResumeProps) => {
	return (
		<section className='containertResume'>
			<span className='resumetTitle'>{ title }</span>
			<p className='resumetBody'>
				{ body }
			</p>
		</section>
	)
}

export default Resume
