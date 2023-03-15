
import CardsMeetOur from '../cards_meetOur/CardsMeetOur';
import MeetOur from '../../moleculas/meet-our/MeetOur';
import meetour from '../../../../../assets/meetour.png'
import ResumeMeetOur from '../resume_meetour/ResumeMeetOur';
import './connecting.scss'
import ResumeProfessional from '../resume_Professional/ResumeProfessional';

const Connecting = () => {

	const title = "Meet Our Team";
	const body = "Read the testimonials of our clients around the world. Meet the customers who have purchased our services.";

	const title1 = 'Connecting with a team of professionals';
	const body1 = 'Get to know all our offices around the world. We work hand in hand with the best to offer you the best.';
	return (

		<section className='connet'>
			<div className='resume-professional'>
				<ResumeProfessional  { ...{ title1, body1 } } />
			</div>

			<div className='resume-professional'>
				<MeetOur image={ meetour } />
				<CardsMeetOur>
					<ResumeMeetOur { ...{ title, body } } />
				</CardsMeetOur>
			</div>
		</section>

	)
}
export default Connecting
