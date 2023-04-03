import './banner.scss'
import '../../../../styles/global.scss'
// import Button from 'features/commons/atoms/button/Button'
import Button from '../../../../features/commons/atoms/button/Button'

const Banner = () => {
	return (
		<div className='bannerContainer'>
			<section className='sectionInfo'>
				<span className='title4'>Let’s Impact in your place !</span>
				<p>
					We are a company with experience in the different existing business models in
					the technological, financial, administrative and creative fields. Let's revolutionize the industry together!
				</p>

				<Button
					bgColor='ligth_blue'
					height={ 20 }
					text="Aplicar"
					txtColor="white"
					width={ 10 }
				/>

			</section>
		</div>
	)
}

export default Banner
