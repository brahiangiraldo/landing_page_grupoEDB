import PageServices from '../../features/services/ui/page/PageServices'
import Banner from '../../features/commons/organism/banner_one/Banner'
import AboutSection from '../about/ui/organism/AboutSection'
import Header from '../header/ui/pages/Header'
import Clients from '../our_clients/ui/organism/Clients'
import Testimonial from '../../features/testimonials/ui/page/Testimonial'
import { CardsLocation } from '../../features/places/organism/cards_location/CardsLocation'
import TeamProfessional from '../../features/meet_us/page/TeamProfessional'
import UniContact from '../../features/contact/page/UniContact'
import Footer from '../footer/Footer'

const LandingPage = () => {
	return (
		<>
			<Header />
			<Clients />
			<AboutSection />
			<Banner />
			<PageServices />
			<Testimonial />
			<CardsLocation />
			<TeamProfessional />
			<UniContact />
			<Footer color='#E7E9EB' />
		</>
	)
}

export default LandingPage
