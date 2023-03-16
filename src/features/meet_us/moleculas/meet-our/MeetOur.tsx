import './meetOur.scss'
import { MeetOurProps } from './MeetOurProps'



const MeetOur = ({ image }: MeetOurProps) => {
	return (
		<div className='containermeet'>
			{ <img src={ image } /> }
			<div className='bot'> RRHH Team - Ciudad de Rio </div>
		</div>
	)
}

export default MeetOur
