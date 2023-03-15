import './testimonial.scss'
import ImageGroup from '../moleculas/image_group/ImageGroup'
import ResumeGroup from '../organism/resume_group/ResumeGroup'
import img4 from '../../../../assets/img4.png'
import CardGroup from '../organism/card_group/CardGroup'

const Testimonial = () => {
	return (
		<>
			<section>
				<ResumeGroup
					title='Testimonials around the world'
					body='Read the testimonials of our clients around the world. Meet the customers who have purchased our services.'
				/>
				<ImageGroup image1={ img4 }
				/>

				<section className='centercard'>
					<CardGroup />
				</section>

			</section>
		</>
	)
}

export default Testimonial;