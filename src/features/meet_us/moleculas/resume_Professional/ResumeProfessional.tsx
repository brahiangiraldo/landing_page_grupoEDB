

import { ResumeProfessionalProps } from './ResumeProfessional.Props';
import './resumeProfessional.scss'




const ResumeProfessional = ({ title1, body1 }: ResumeProfessionalProps) => {
	return (
		<section className='containerResumePro'>
			<span className='resumeTitlePro'>{ title1 }</span>
			<p className='resumeBodyPro'>
				{ body1 }
			</p>
		</section>
	)
}

export default ResumeProfessional;