import ChooseUs from '../organism/choose_us/ChooseUs'
import SectionCardsInformation from '../organism/section_cards_information/SectionCardsInformation'
import './pageServices.scss'

const PageServices = () => {
  return (
    <>
      <section className='services'>
        <SectionCardsInformation />
        <ChooseUs />
      </section>
    </>
  )
}

export default PageServices