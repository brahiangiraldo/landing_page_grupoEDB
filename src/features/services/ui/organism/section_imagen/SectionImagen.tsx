
import './sectionImagen.scss'
import { SectionImagenProps } from './SectionImagenProps'



const SectionImagen = ({ image }: SectionImagenProps) => {
  return (
    <div className='containerImg'>
      { <img src={ image } /> }
    </div>
  )
}

export default SectionImagen