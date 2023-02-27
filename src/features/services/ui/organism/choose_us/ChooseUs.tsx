
import Resume from '../../../../commons/molecules/resume/Resume'
import ResumeNum from '../resumenum/ResumeNum'
import './chooseUs.scss'


const ChooseUs = () => {
  return (

    <>
      <section className='section'>
        <span className='textTitle'>
          Choose Us
        </span>
        <div>
          <Resume
            body="nuestra empresa soluciona las necesidades actuales que 
          surgen con la nueva era digital posicionándonos como una empresa
          de confianza incursionando en el sector salud y belleza, así como
          en el turismo y hotelería."
            title="Why Chosse Us?"
          />
        </div>

        <div className='grid-container'>
          <ResumeNum
            body='Years Experence'
            title="20 +"
          />

          <ResumeNum
            body='Years Project Done'
            title="200 +"

          />
          <ResumeNum
            body='People working in our company'
            title="400 +"
          />
          <ResumeNum
            body='Supports every moment'
            title="24/07"
          />
        </div>
      </section>
    </>
  )
}

export default ChooseUs