import './teamProfessional.scss'
import ResumePoints from '../../features/meet_us/moleculas/resume_Points/ResumePoints';
import ResumeProfessional from '../../features/meet_us/moleculas/resume_Professional/ResumeProfessional';
import Connecting from '../../features/meet_us/organism/connecting/Connecting';



const TeamProfessional = () => {
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
			<Connecting />
			<ResumeProfessional { ...{ title1, body1 } } />
			<section className='team'>
				{ items.map((element) => <ResumePoints title={ element.title } body={ element.body } />) }
			</section>
		</section>
	)
}

export default TeamProfessional