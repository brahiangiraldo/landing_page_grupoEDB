
import { ResumeHeadProps } from './ResumeHead.props';
import './resumeHead.scss'




const ResumeHead = ({ title, body }: ResumeHeadProps) => {
	return (
		<section className='containersResume'>
			<span className='resumesTitle'>{ title }</span>
			<p className='resumesBody'>
				{ body }
			</p>
		</section>
	)
}

export default ResumeHead;