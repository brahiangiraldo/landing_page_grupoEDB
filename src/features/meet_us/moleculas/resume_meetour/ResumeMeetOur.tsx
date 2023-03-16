import { ResumeMeetOurProps } from './ResumeMeetOur.Props';
import './resumeMeetOur.scss'


const ResumeMeetOur = ({ title, body, }: ResumeMeetOurProps) => {
	return (
		<section className='containerResumemeet'>
			<span className='resumeTitlemeet'>{ title }</span>
			<h2 className='subtitlemeet'>RRHH Specialist Manager</h2>
			<p className='resumeBodymeet'>{ body }</p>
			<h3 className='meetfinal'>Jhon Rodriguez</h3>
		</section>
	)
}

export default ResumeMeetOur