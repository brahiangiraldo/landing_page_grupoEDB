
import SectionServices from '../section_cards/SectionServices'
import { SectionInformation } from '../section_information/SectionInformation'
import './sectioncardsinformation.scss'





const SectionCardsInformation = () => {
  return (
    <>
      <div className='section-cards-information'>
        <section className='section-information'>
          <SectionInformation />
        </section>
        <section className='section-services'>
          <SectionServices />
        </section>

      </div>
    </>
  )
}

export default SectionCardsInformation