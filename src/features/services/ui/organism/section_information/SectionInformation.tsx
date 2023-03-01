
import './sectionInformation.scss'
import Button from '../../../../commons/atoms/button/Button'
import Resume from '../../../../commons/molecules/resume/Resume'


export const SectionInformation = () => {
  return (
    <>
      <span className='textTitle'>
        What we offer to you.
      </span>
      <div>
        <Resume
          body="Nuestra empresa soluciona las necesidades actuales
            que surgen con la nueva era digital posicionándonos como 
            una empresa de confianza incursionando en el sector salud 
            y belleza, así como en el turismo y hotelería."
          title="Get to know all our services and how we can help you"
        />
        <Button
          bgColor='ligth_blue'
          height={ 20 }
          text="Read More"
          txtColor="white"
          width={ 10 }
        />
      </div>

    </>
  )
}