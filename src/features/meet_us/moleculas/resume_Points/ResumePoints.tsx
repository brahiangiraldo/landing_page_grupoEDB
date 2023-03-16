
import { ResumePointsProps } from './ResumePoints.Props';
import './resumePoints.scss'




const ResumePoints = ({ title, body }: ResumePointsProps) => {
	return (
		<section className='containerResumePoint'>
			<span className='resumeTitlePoint'>{ title }</span>
			<p className='resumeBodyPoint'>
				{ body }
			</p>
		</section>
	)
}

export default ResumePoints;