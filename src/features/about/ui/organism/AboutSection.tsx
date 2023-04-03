import ImageShadow from '../../../commons/molecules/image_shadow/ImageShadow'
import './aboutSection.scss'
import img1 from '../../../../assets/img1.png'
import img2 from '../../../../assets/img2.png'
import Resume from '../../../commons/molecules/resume/Resume'

const AboutSection = () => {
	return (
		<section className='containerAboutSection'>
			<section className='rowSection'>
				<ImageShadow image={ img1 } />
				<Resume
					title='We are here for Business Solutions & Ideas'
					body='Somos una empresa con experiencia en los diferentes modelos de negocio existentes en el ámbito tecnológico, financiero, administrativo y creativo.'
				/>
			</section>
			<section className='rowSection'>
				<Resume
					title='We transform experiences into functional realities'
					body='nuestra empresa soluciona las necesidades actuales que surgen con la nueva era digital posicionándonos como una empresa de confianza incursionando en el sector salud y belleza, así como en el turismo y hotelería.'
				/>
				<ImageShadow image={ img2 } />
			</section>
		</section>
	)
}

export default AboutSection
