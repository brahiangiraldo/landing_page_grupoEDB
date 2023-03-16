// import ResumeHead from '../../../testimonials/ui/organism/resume_head/ResumeHead'
import ResumeHead from '../../../places/moleculas/resume_head/ResumeHead'
import Dubai from '../../../../assets/Dubai.png'
import Medellin from '../../../../assets/Medellin.png'
import Mexico from '../../../../assets/Mexico.png'
import Rusia from '../../../../assets/Rusia.png'
import Torre from '../../../../assets/Torre.png'
import España from '../../../../assets/España.png'
// import CardHeadCity from '../../../testimonials/ui/organism/card_headdb/CardHeadCity'
import CardHeadCity from '../../../places/moleculas/card_headdb/CardHeadCity'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './cardsLocation.scss'





export const CardsLocation = () => {



	const settings = {
		className: "slick-active",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 400,
		autoplay: true,
		autoplaySpeed: 1500
	}

	return (
		<div>
			<section>
				<ResumeHead title='Know all our headquarters'
					body='Get to know all our offices around the world. We work hand in hand with the best to offer you the best.' />
			</section>


			<Slider { ...settings }>
				<div>
					<CardHeadCity image={ Dubai } titulo={ 'Emiratos Àrabes' } />
				</div>
				<div >
					<CardHeadCity image={ Medellin } titulo={ 'Medellín, Colombia' } />
				</div>
				<div>
					<CardHeadCity image={ Mexico } titulo={ 'Ciudad de México' } />
				</div>
				<div>
					<CardHeadCity image={ Rusia } titulo={ 'Moscu' } />
				</div>
				<div>
					<CardHeadCity image={ Torre } titulo={ 'Francia' } />
				</div>
				<div>
					<CardHeadCity image={ España } titulo={ 'Madrid' } />
				</div>

			</Slider>
		</div>
	)
}

