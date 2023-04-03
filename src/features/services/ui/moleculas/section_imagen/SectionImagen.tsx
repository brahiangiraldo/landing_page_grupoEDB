
import './sectionImagen.scss'
import { SectionImagenProps } from './SectionImagenProps'



const SectionImagen = ({ image }: SectionImagenProps) => {
	return (
		<div className='containersImg'>
			{ <img src={ image } /> }
		</div>
	)
}

export default SectionImagen