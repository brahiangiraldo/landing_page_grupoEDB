
import ResumePoints from '../../testimonials/ui/organism/resume_Points/ResumePoints';
import './teamProfessional.scss'
import ResumeProfessional from '../../testimonials/ui/organism/resume_Professional/ResumeProfessional';
// import Connecting from 'features/testimonials/ui/organism/connecting/Connecting';
import Connecting from '../../testimonials/ui/organism/connecting/Connecting';
import classNames from 'classnames';



const TeamProfesional = () => {
	const title1 = 'Connecting with a team of professionals';
	const body1 = 'Get to know all our offices around the world. We work hand in hand with the best to offer you the best.';
	// const Conneting:() => JSX.Element


	const items: { title: string, body: string }[] = [
		{
			title: 'Objectives',
			body: 'We make use of technology to enhance our services and hand in hand with these we constantly improve for you and your business.'
		},
		{
			title: 'Experience',
			body: 'We guarantee the best user experience for each of our branches, thus ensuring the quality of our product.'
		},
		{
			title: 'Profesionalism',
			body: 'Our team is made up of experts, concerned about your business, always covering the needs of each of our projects.'
		}
	]
	return (
		<section className='team-professionals'>
			<section className='connets'>
				<Connecting />
			</section>

			<ResumeProfessional { ...{ title1, body1 } } />
			<section className='team'>
				{ items.map((element) => <ResumePoints title={ element.title } body={ element.body } />) }
			</section>
		</section>
	)
}

export default TeamProfesional